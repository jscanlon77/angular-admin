import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { RegistrationModel } from '../../model/registrationModel';
import { RegistrationService } from './register.service';
import { Message } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  providers: [RegistrationService],
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public submitted: boolean = false;
  private msgs: Message[] = [];

  constructor(fb: FormBuilder, private _registrationService: RegistrationService, private _router : Router) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      let registrationModel = new RegistrationModel
        (this.email.value, this.password.value, this.repeatPassword.value);

      this._registrationService.register(registrationModel).subscribe(res => {
        this.msgs.push({
          severity: 'info',
          summary: 'Registered Successfully',
          detail: 'The user has successfully be registered on the system.'
        });

        // Now put a little delay into the call before the redirect to the login page.
        this._registrationService.waitRedirect().debounceTime(10000)
          .subscribe(res => {
              this._router.navigate(['login']);
          })
      }, error => {
        this.msgs.push({
          severity: 'error',
          summary: 'Could not connect to server',
          detail: 'There has been an error connecting to server'
        });
      });
    }
  }
}

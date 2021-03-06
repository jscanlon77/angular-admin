import { Component, ViewEncapsulation, provide, Provider } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { HTTP_PROVIDERS } from '@angular/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { AuthenticationService } from './authentication';
import { IUser } from './user';



@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  providers: [AuthenticationService],
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  private msgs: Message[] = [];

  constructor(fb: FormBuilder, private _authenticationService: AuthenticationService,
    private _location: Location,
    private _router: Router,
    private _localStorage: LocalStorageService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];


    let loginDetailsResult = this._localStorage.get('loginDetails')
    if (loginDetailsResult !== null) {
      this._router.navigate(['']);
    } else {
      this.form = fb.group({
        'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      });

      this.email = this.form.controls['email'];
      this.password = this.form.controls['password'];
    }
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // we need to make a call to the http service and if it is successful then
      // we add a token and other details to the local storage service this will be done 
      // with observables.
      // so if we are not logged in then we need to get the original location that the user 
      // specified.
      let username = this.email.value;
      let password = this.password.value;
      this._authenticationService.login(username, password)
        .subscribe(res => {
          let result = res;
          // now convert the body to a dictionary..
          let loginDetailsBody = JSON.parse(result['_body']);
          let loginDictionary = <[string, string]>loginDetailsBody;
          // Now stuff the token and the username into the LocalStorageService
          // so that we can display the username that is logged in.
          // we will then need to write the mechanism to protect the pages on the routing if
          // we don't have a token for isLoggedIn.
          this._localStorage.add('loginDetails', loginDictionary);
          this._router.navigate(['']);

        }, error => {
          this.msgs.push( { severity: 'error',
          summary: 'Could not connect to server',
          detail: 'There has been an error connecting to server' }
          );

        });
    }
  }
}

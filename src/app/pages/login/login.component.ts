import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private _http: Http,
    private _location: Location,
    private _router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // we need to make a call to the http service and if it is successful then
      // we add a token and other details to the local storage service this will be done 
      // with observables.
      // so if we are not logged in then we need to get the original location that the user 
      // specified.
      let originalPath = this._location.path;
      // and if the login details are correct
      if (originalPath !== null || originalPath !== undefined) {
        this._router.navigate([originalPath]);
      }
    }
  }
}

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Login } from './login.component';
import { GrowlModule } from 'primeng/primeng';
import { routing }       from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GrowlModule,
    NgaModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export default class LoginModule {}

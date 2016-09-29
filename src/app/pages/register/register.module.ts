import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { GrowlModule } from 'primeng/primeng';
import { Register } from './register.component';
import { routing }       from './register.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    GrowlModule,
    routing
  ],
  declarations: [
    Register
  ]
})
export default class RegisterModule {}

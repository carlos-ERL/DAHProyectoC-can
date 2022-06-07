import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DateRegisterPageRoutingModule } from './date-register-routing.module';

import { DateRegisterPage } from './date-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    DateRegisterPageRoutingModule
  ],
  declarations: [DateRegisterPage]
})
export class DateRegisterPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateSchedulePageRoutingModule } from './date-schedule-routing.module';

import { DateSchedulePage } from './date-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DateSchedulePageRoutingModule
  ],
  declarations: [DateSchedulePage]
})
export class DateSchedulePageModule {}

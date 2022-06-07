import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateSchedulePage } from './date-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: DateSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSchedulePageRoutingModule {}

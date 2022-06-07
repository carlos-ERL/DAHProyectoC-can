import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateRegisterPage } from './date-register.page';

const routes: Routes = [
  {
    path: '',
    component: DateRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateRegisterPageRoutingModule {}

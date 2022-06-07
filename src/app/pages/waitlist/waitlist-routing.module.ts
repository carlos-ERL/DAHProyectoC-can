import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitlistPage } from './waitlist.page';

const routes: Routes = [
  {
    path: '',
    component: WaitlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitlistPageRoutingModule {}

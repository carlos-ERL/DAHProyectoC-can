import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyUserQuotesPage } from './my-user-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: MyUserQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyUserQuotesPageRoutingModule {}

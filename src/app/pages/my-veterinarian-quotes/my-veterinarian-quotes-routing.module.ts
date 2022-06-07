import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyVeterinarianQuotesPage } from './my-veterinarian-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: MyVeterinarianQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyVeterinarianQuotesPageRoutingModule {}

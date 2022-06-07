import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinationListPage } from './vaccination-list.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinationListPageRoutingModule {}

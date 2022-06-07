import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePaswordPage } from './restore-pasword.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePaswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePaswordPageRoutingModule {}

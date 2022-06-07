import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinarianProfilePage } from './veterinarian-profile.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinarianProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinarianProfilePageRoutingModule {}

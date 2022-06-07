import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinationListPageRoutingModule } from './vaccination-list-routing.module';

import { VaccinationListPage } from './vaccination-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinationListPageRoutingModule
  ],
  declarations: [VaccinationListPage]
})
export class VaccinationListPageModule {}

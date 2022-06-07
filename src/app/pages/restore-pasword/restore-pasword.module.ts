import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePaswordPageRoutingModule } from './restore-pasword-routing.module';

import { RestorePaswordPage } from './restore-pasword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePaswordPageRoutingModule
  ],
  declarations: [RestorePaswordPage]
})
export class RestorePaswordPageModule {}

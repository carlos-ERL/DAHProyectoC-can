import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinarianProfilePageRoutingModule } from './veterinarian-profile-routing.module';

import { VeterinarianProfilePage } from './veterinarian-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinarianProfilePageRoutingModule
  ],
  declarations: [VeterinarianProfilePage]
})
export class VeterinarianProfilePageModule {}

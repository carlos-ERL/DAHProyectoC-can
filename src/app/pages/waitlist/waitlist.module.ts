import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitlistPageRoutingModule } from './waitlist-routing.module';

import { WaitlistPage } from './waitlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitlistPageRoutingModule
  ],
  declarations: [WaitlistPage]
})
export class WaitlistPageModule {}

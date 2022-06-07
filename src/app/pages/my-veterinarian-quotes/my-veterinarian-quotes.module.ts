import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyVeterinarianQuotesPageRoutingModule } from './my-veterinarian-quotes-routing.module';

import { MyVeterinarianQuotesPage } from './my-veterinarian-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyVeterinarianQuotesPageRoutingModule
  ],
  declarations: [MyVeterinarianQuotesPage]
})
export class MyVeterinarianQuotesPageModule {}

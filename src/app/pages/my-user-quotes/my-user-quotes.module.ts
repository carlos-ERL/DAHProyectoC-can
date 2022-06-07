import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyUserQuotesPageRoutingModule } from './my-user-quotes-routing.module';

import { MyUserQuotesPage } from './my-user-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyUserQuotesPageRoutingModule
  ],
  declarations: [MyUserQuotesPage]
})
export class MyUserQuotesPageModule {}

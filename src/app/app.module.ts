import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [AngularFireModule.initializeApp(environment.firebaseconfig),
  AngularFireDatabaseModule,BrowserModule, 
  IonicModule.forRoot(),
  AppRoutingModule,
  HttpClientModule,
  AngularFireAuthModule,
  
],
  providers: [Camera,AngularFirestore,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}

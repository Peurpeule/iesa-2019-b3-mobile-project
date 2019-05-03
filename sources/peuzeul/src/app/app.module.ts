import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Badge } from '@ionic-native/badge/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Contact,
    ContactField,
    ContactName,
    Camera,
    Geolocation,
    GoogleAnalytics,
    NativeGeocoder,
    Badge,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

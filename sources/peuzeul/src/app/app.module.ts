import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


import { Calendar } from '@ionic-native/calendar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

import { LanguagePopoverPageModule } from './pages/language-popover/language-popover.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { IonicStorageModule } from '@ionic/storage';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleAnalytics,
    NativeGeocoder,
    Badge,
    
    PhotoLibrary,
    AppPreferences,
    ScreenOrientation,
    Calendar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';


import { LanguageService } from './services/language.service';

import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { MuteSoundService } from './mute-sound.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    },
     {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Micro',
      url: '/micro',
      icon: 'microphone'
    },
    {
      title: 'Géolocalisation',
      url: '/geolocalisation',
      icon: 'navigate'
    }
  ];
  public isMuted = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ga: GoogleAnalytics,
    private languageService: LanguageService,
    private mutesound: MuteSoundService,
    private appPreferences: AppPreferences,
  ) {
    this.initializeApp();
    this.isMuted = true;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      /*this.ga.startTrackerWithId('UA-139417733-1')
          .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == '+ e));*/

      this.ga.startTrackerWithId('UA-139417733-1')
          .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == ' + e));

    });

    this.languageService.setInitialAppLanguage();
  }

  muteUnmute() {
    console.log('muteUnmute');
    this.appPreferences.fetch('sound', 'sound', ).then((res) => { this.isMuted = !res; });
    this.appPreferences.store('sound', 'sound', this.isMuted).then((res) => { console.log('isMuted : ', res); });
    console.log('is Muted : ', this.isMuted);
    // this.mutesound.sound = !this.mutesound.sound;
  }
}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';


import { LanguageService } from './services/language.service';

import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { MuteSoundService } from './mute-sound.service';
import {GamificationBadgeService} from './gamification-badge.service';


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
      title: 'Profil',
      url: '/profil',
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
    },
    {title: 'Orientation',
      url: '/orientation',
      icon: 'phone-landscape'
    },
    {
      title: 'Calendrier',
      url: '/calendar',
      icon: 'calendar'
    }
  ];
  public isMutedIcon = 'volume-mute';

  languages = this.languageService.getLanguages();
  selected = this.badge.globalLanguage;

  className: string = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ga: GoogleAnalytics,
    private languageService: LanguageService,
    private mutesound: MuteSoundService,
    private appPreferences: AppPreferences,
    private badge: GamificationBadgeService
  ) {
    this.initializeApp();
    this.appPreferences.store('sound', 'sound', 'true').then((res) => { console.log('isMutedIcon : ', res); });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.languages = this.languageService.getLanguages();


      /*this.ga.startTrackerWithId('UA-139417733-1')
          .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == '+ e));*/

      /*this.ga.startTrackerWithId('UA-139417733-1')
          .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == ' + e));*/

    });

    this.languageService.setInitialAppLanguage();
  }

  select(lng) {
    this.languageService.setLanguage(lng);
    this.languages = this.languageService.getLanguages();
    //this.selected = lng;
    this.className = '';
    this.badge.globalLanguage = lng;
    this.selected = this.badge.globalLanguage;
  }
  changeClass () {
    this.className = 'show-modal';
  }

  muteUnmute() {
    console.log('muteUnmute');
    let isMuted = null;
    this.appPreferences.fetch('sound', 'sound').then((res) => { isMuted = !res; });
    console.log('isMuted : ', isMuted);
    if (isMuted) {
      this.appPreferences.store('sound', 'sound', 'false').then((res) => { console.log('isMutedIcon : ', res); });
      this.isMutedIcon = 'volume-off';
    } else {
      this.appPreferences.store('sound', 'sound', 'true').then((res) => { console.log('isMutedIcon : ', res); });
      this.isMutedIcon = 'volume-mute';
    }
    console.log('this.isMutedIcon : ', this.isMutedIcon);
  }
}

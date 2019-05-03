import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ga: GoogleAnalytics
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.ga.startTrackerWithId('UA-139417733-1')
          .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == '+ e));
    });
  }
}

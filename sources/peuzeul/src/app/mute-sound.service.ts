import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuteSoundService {
  public sound = true;
  constructor(
      // private appPreferences: AppPreferences,
  ) {
    // this.appPreferences.fetch('key').then((res) => { console.log('res : ', res); });
  }
}

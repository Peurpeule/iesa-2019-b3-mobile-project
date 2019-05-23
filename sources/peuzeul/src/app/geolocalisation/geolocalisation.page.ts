import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Badge } from '@ionic-native/badge/ngx';



@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.page.html',
  styleUrls: ['./geolocalisation.page.scss'],
})
export class GeolocalisationPage implements OnInit {

  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: String;

  watchLocationUpdates:any;
  loading:any;
  isWatching:boolean;

  //Geocoder config
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  //Badge Number
  badgeNumber: number;
  badgeResult: 0;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private badge: Badge
  ) { }

  ngOnInit() {
  }


  //Get current coortdinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy= resp.coords.accuracy;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    }).catch((error) => {
      alert('Error getting location getGeoLocation' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: any[]) => {
        this.geoAddress = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }


  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }
  //Start location update watch
  watchLocation() {
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    });
  }
  //Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }
<<<<<<< HEAD
=======

  
  
  
  
  
  
  async clearBadge(){
    try{
      let badge = await this.badge.clear();
      console.log(badge);
      this.badgeResult = 0;
    }catch(e){
      console.error(e);
    }
  }
  async getBadge(){
    try{
      let badgeAmount = await this.badge.get();
      console.log(badgeAmount);
      this.badgeResult = badgeAmount;
    }catch(e){
      console.error(e);
    }
  }

  async increaseBadge(badgeNumber: string){
    try{
      let badge = await this.badge.increase(Number(badgeNumber));
      console.log(badge);
      this.badgeResult = badge;

    }catch(e){
      console.error(e);
    }
  }

  async decreaseBadge(badgeNumber: string) {
    try {
      let badge = await this.badge.decrease(Number(badgeNumber));
      console.log(badge);
      this.badgeResult = badge;

    } catch (e) {
      console.error(e);
    }
  }
  async setBadge(badgeNumber: number){
    try{
      let badge = await this.badge.set(badgeNumber);
      console.log(badge);
      this.badgeResult = badge;
    }catch(e){
      console.error(e);
    }
  }

  async requestPermission(){
    try{
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      
      if(!hasPermission){
        let permission = await this.badge.requestPermission();
        console.log(permission);
      }
    }
    catch(e){
      console.error(e);
    }
  }



>>>>>>> master
}

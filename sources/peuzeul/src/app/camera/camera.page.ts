import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GamificationBadgeService } from '../gamification-badge.service'
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  myphoto:any;


  constructor(private camera: Camera, private badge: GamificationBadgeService, private photoLibrary: PhotoLibrary, public plt: Platform) { }

  ngOnInit() {
  }

  ownbadge(){
    this.badge.reward[2].owned = true;
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(imageData => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.myphoto = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      // Handle error
    });
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then(imageData => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.myphoto = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      // Handle error
    });
  }
}

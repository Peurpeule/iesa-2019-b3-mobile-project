import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MicroPage } from './micro.page';

import { ViewChild } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from "@ionic-native/media-capture/ngx";
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { File} from "@ionic-native/file/ngx";

const routes: Routes = [
  {
    path: '',
    component: MicroPage
  }
];
const MEDIA_FILES_KEY = 'mediaFiles';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MicroPage]
})
export class MicroPageModule {

  mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;

  constructor(private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) {}

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }

  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
          let capturedFile = res[0];
          let fileName = capturedFile.name;
          let dir = capturedFile['localURL'].split('/');
          dir.pop();
          let fromDirectory = dir.join('/');
          var toDirectory = this.file.dataDirectory;

          this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
            this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
          },err => {
            console.log('err: ', err);
          });
        },
        (err: CaptureError) => console.error(err));
  }

  play(myFile) {
    if (myFile.name.indexOf('.wav') > -1) {
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    }
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.page.html',
  styleUrls: ['./orientation.page.scss'],
})
export class OrientationPage implements OnInit {

  orientation: String;

  constructor(private screenOrientation: ScreenOrientation) { }

  ngOnInit() {}

  getOrientation() {
    this.orientation = this.screenOrientation.type;
  }



  setToLandscape(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.orientation = this.screenOrientation.type;

  }

  setToPortrait(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.orientation = this.screenOrientation.type;
  }
}

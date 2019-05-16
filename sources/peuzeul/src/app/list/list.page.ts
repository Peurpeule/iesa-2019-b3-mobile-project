import { Component, OnInit } from '@angular/core';
import { GamificationBadgeService } from '../gamification-badge.service'
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public myBadges = [];
  constructor(private badge: GamificationBadgeService) {
  }

  ionViewDidEnter(){
    this.badge.reward.map((
        item, index
    ) => {
      if(item.owned){
        this.myBadges.push(item.title);
      }
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

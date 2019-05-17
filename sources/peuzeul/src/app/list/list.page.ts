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

  public myBadges = [];
  public myTitles = [];
  constructor(private badge: GamificationBadgeService) {
  }

  ionViewDidEnter() {
    /* Badges */
    let badgesCounter = 0;
    this.badge.reward.map((
        item, index
    ) => {
      if (item.owned) {
        badgesCounter++;
        this.myBadges.push(item.title);
      }
    });
    if(badgesCounter > 2){
      this.badge.titles[1].owned = true;
    }
    /* Titles */
    this.badge.titles.map((
        item, index
    ) => {
      if (item.owned) {
        this.myTitles.push(item.title);
      }
    });
  }

  ngOnInit() {
  }
}

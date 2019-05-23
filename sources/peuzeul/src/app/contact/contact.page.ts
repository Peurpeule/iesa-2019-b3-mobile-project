import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { GamificationBadgeService } from '../gamification-badge.service'
>>>>>>> master

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private badge: GamificationBadgeService ) {

  }

  ngOnInit() {
  }

  ownbadge(){
    this.badge.reward[1].owned = true;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamificationBadgeService {

  public reward = [];

  public titles = [];

  constructor() {
    /* Rewards */
    this.reward.push({
      title: "Bien débuter",
      owned: true
    });
    this.reward.push({
      title: "Déméler le vrai du faux",
      owned: false
    });
    this.reward.push({
      title: "Savoir qui l'ont est",
      owned: false
    });
    /* Titles */
    this.titles.push({
      title: "Junior",
      owned: true
    });
    this.titles.push({
      title: "As de la débrouille",
      owned: false
    });
  }
}

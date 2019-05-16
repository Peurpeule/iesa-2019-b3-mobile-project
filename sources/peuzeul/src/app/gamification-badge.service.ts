import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamificationBadgeService {

  public reward = [];

  constructor() {
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
  }
}

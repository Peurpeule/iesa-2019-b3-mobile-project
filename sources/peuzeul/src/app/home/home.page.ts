import {Component, OnInit} from '@angular/core';
import { LanguageService } from './../services/language.service';
import { GamificationBadgeService } from '../gamification-badge.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  languages = this.languageService.getLanguages();
  selected = this.badge.globalLanguage;
  strings = {
      "fr":{
          "title": "Commencer l'aventure",
          "description": "Un jeu qui vous fera utiliser toutes les fonctionnalités de votre téléphone pour résoudre une enquète.",
          "cta": "Démarrer la partie"
      },
      "en":{
          "title": "Your journey starts here",
          "description": "A game that will require the use of all phone features to solve riddles.",
          "cta": "Start your journey"
      }
  };
  name = this.badge.playerPseudo;

  constructor(private languageService: LanguageService, private badge: GamificationBadgeService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selected = this.badge.globalLanguage;
  }
    ngDoCheck() {
        this.languages = this.languageService.getLanguages();
        this.selected = this.badge.globalLanguage;
    }

  updateprofileName() {
    this.badge.playerPseudo = this.name;
  }

  ionViewWillEnter() {
      this.languages = this.languageService.getLanguages();
      this.selected = this.badge.globalLanguage;
  }


  /*changeClass () {
    this.className = 'show-modal';
  }*/
}

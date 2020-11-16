import { Component } from '@angular/core';
import { Match, MatchOutcome } from '../match';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  matches: Match[];
  currentMatch: Match;
  possibleOutcomes: {value: string, display: string}[];

  constructor() {
    try {
      this.matches = JSON.parse(localStorage.getItem('matches')) || [];
    } catch(e) {
      this.matches = [];
    }
    this.currentMatch = new Match();
    this.possibleOutcomes = Object.entries(MatchOutcome).map(entry => {
      return {value: entry[1], display: entry[0]};
    });
  }

  outcomeChange(event: CustomEvent, index: number) {
    this.currentMatch.survivorOutcome[index] = event.detail.value;
  }

  saveMatch() {
    this.matches.push(this.currentMatch);
    this.currentMatch = new Match();
    this.syncMatches();

  }

  syncMatches() {
    localStorage.setItem('matches', JSON.stringify(this.matches));
  }

}

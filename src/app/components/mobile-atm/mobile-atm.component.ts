import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-atm',
  templateUrl: './mobile-atm.component.html',
  styleUrls: ['./mobile-atm.component.scss']
})
export class MobileAtmComponent implements OnInit {
  currentSection = 'selectLanguageFlow';
  availableLanguages = ['English', 'Hindi', 'Marathi'];
  constructor() { }

  ngOnInit() {
  }

  onChange(selectedLanguage: string): void {
    this.currentSection = 'cardTypeFlow';
  }

}

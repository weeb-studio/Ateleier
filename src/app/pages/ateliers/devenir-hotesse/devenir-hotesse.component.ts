import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-devenir-hotesse',
  templateUrl: './devenir-hotesse.component.html',
  styleUrls: ['./devenir-hotesse.component.scss'],
})
export class DevenirHotesseComponent implements OnInit {
  safeURL;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/1ozGKlOzEVc'
    );
  }

  ngOnInit(): void {}
}

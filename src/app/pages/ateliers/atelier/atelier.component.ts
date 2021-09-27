import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.scss'],
})
export class AtelierComponent implements OnInit {
  safeURL;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/1ozGKlOzEVc'
    );
  }

  ngOnInit(): void {}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AtelierService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getConseillereAtelier() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/atelier';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  createAtelier(
    place: Number,

    theme: string,

    hotesse: string,

    nomHotesse: string,

    prenomHotesse: string,

    adresseHotesse: string,

    postal: number,

    villeHotesse: string,

    date: Date,

    time: number,

    status: string,

    ouvert: boolean,

    conseillere: string
  ) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/atelier';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    var data = {
      place: place,

      theme: theme,

      hotesse: hotesse,

      nomHotesse: nomHotesse,

      prenomHotesse: prenomHotesse,

      adresseHotesse: adresseHotesse,

      postal: postal,

      villeHotesse: villeHotesse,

      date: date,

      time: time,

      status: status,

      ouvert: ouvert,

      conseillere: conseillere,
    };
    return this.httpClient.post(API_URL, {}, { headers: headers });
  }
}

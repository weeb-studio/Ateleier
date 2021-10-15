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

  getAtelier(value?: String) {
    const token = this.localStorage.get('x-access-token');
    let API_URL: string;
    if (value) {
      API_URL = this.SERVER_URL + '/atelier?ville=' + value;
    } else {
      API_URL = this.SERVER_URL + '/atelier';
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  createAtelier(
    place: String,
    theme: String,
    participants: Number,
    date: Date,
    // hotesse: String,
    // nomHotesse: String,
    // prenomHotesse: String,
    // adresseHotesse: String,
    postal: String, //Number,
    villeHotesse: String
    // date: Date,
    // time: String, //Number,
    // status: String,
    // ouvert: Boolean
  ) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/atelier';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    var data = {
      // place: place,
      // theme: theme,
      // hotesse: hotesse,
      // nomHotesse: nomHotesse,
      // prenomHotesse: prenomHotesse,
      // adresseHotesse: adresseHotesse,
      // postal: postal,
      // villeHotesse: villeHotesse,
      // date: date,
      // time: time,
      // status: status,
      // ouvert: ouvert,
      theme: theme,
      status: place,
      ouvert: true,
      postal: postal,
      hotesse: '615fcef378103d702d8f5a6f',
      villeHotesse: villeHotesse,

      place: participants,
      date: date,
      time: 14,
    };
    return this.httpClient.post(API_URL, data, { headers: headers });
  }
}

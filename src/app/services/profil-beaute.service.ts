import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilBeauteService {
  private SERVER_URL: String = environment.SERVER_URLL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) { }

  addProfil(natureCheveux: String, problematiqueCheveux: String, textureCheveux: String, typeCheveux: String, longueurCheveux: String) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/profilBeaute';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const data = {
        natureCheveux: natureCheveux,
        problematiqueCheveux: problematiqueCheveux,
        textureCheveux: textureCheveux,
        typeCheveux: typeCheveux,
        longueurCheveux: longueurCheveux,
    };
    return this.httpClient.post(API_URL, data, { headers: headers });
  }

  getProfil() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/profilBeaute';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

}

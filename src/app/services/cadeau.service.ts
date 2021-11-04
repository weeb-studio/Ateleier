import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CadeauService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  addHotesseCadeau(produit: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/cadeau';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.post(
      API_URL,
      { produit: produit },
      { headers: headers }
    );
  }

  getHotesseCadeau() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/cadeau';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.get(API_URL, { headers: headers });
  }

  deleteCadeau(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/cadeau/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.delete(API_URL, { headers: headers });
  }
}

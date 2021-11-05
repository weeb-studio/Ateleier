import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  addProductToPanier(produitId: String, quantite: Number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/panier';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const data = {
      produitId: produitId,
      quantite: quantite,
    };
    return this.httpClient.post(API_URL, data, { headers: headers });
  }

  getProductToPanier() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/panier';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  removeProductToPanier(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/panier/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }
}

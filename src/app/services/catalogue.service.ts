import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getProduct(nom: String) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/produit?nom=' + nom;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getCatalogueProduct() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/catalogue';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  addProductToCatalogue(productId: String, qte: Number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/catalogue';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const data = {
      produit: productId,
      qte: qte,
    };
    return this.httpClient.post(API_URL, data, { headers: headers });
  }

  removeProductToCatalogue(id: String) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/catalogue/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }
}

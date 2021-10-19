import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  addContact(nom: String, email: String, objet: String, message: String) {
    const API_URL = this.SERVER_URL + '/contact';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      nom: nom,
      email: email,
      objet: objet,
      message: message,
    };
    return this.httpClient.post(API_URL, data, { headers: headers });
  }

  getContact() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/contact';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  deleteContact(id: String) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/contact/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }
}

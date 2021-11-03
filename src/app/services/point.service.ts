import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PointService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getHotessePoint() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/point';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  addHotessePoint(point: Number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/point';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, { point: point }, { headers: headers });
  }

  removeHotessePoint(point: Number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/point/remove';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, { point: point }, { headers: headers });
  }
}

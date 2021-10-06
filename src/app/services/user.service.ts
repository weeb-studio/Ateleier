import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from 'src/app/pages/login/User';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../interfaces/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  userLogin(email: string, pwd: string): any {
    const API_URL = this.SERVER_URL + '/auth/signin';
    return this.httpClient.post(API_URL, {
      email: email,
      password: pwd,
    });
  }

  getUser() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/profile';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getUnvaldUser() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/unvalid';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
  validate(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/user/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const body = {
      status: true,
    };
    return this.httpClient.put(API_URL, body, { headers: headers });
  }
}

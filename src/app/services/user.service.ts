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

  userRegister(
    nom: string,
    prenom: string,
    email: string,
    adresse: String,
    role: string,
    code: number,
    ville: string,
    tel: string,
    status: boolean,
    password: string
  ) {
    const API_URL = this.SERVER_URL + '/auth/signup';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(
      API_URL,
      {
        nom: nom,
        prenom: prenom,
        email: email,
        adresse: adresse,
        role: role,
        ville: ville,
        postal: code,
        numero: tel,
        password: password,
        status: status,
      }
      // { headers: headers }
    );
  }

  userLogin(email: string, pwd: string): any {
    const API_URL = this.SERVER_URL + '/auth/signin';
    return this.httpClient.post(API_URL, {
      email: email,
      password: pwd,
    });
  }

  imageSet(file: File, name: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/updateimage';
    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'x-access-token': `${token}`,
    });
    const fd = new FormData();
    fd.append('imageURL', <File>file, name);
    console.log(fd);
    return this.httpClient.put(API_URL, fd, {
      headers: headers,
      reportProgress: true,
      observe: 'events',
    });
  }

  updateUser(
    nom: string,
    prenom: string,
    adresse: String,
    code: number,
    ville: string,
    tel: string
  ) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/update';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const dataUser = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      ville: ville,
      postal: code,
      numero: tel,
    };
    return this.httpClient.put(API_URL, dataUser, { headers: headers });
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

  getTypeUsers(type: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/users/' + type;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getOneUser(uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/user/' + uid;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}

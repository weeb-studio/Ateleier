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
  // programmes/res/routine-naturelle
  // programmes/res/routine-structuree
  // programmes/res/routine-simple

  algoRoutine(res1: string, res3: string, res4: string, res5: string): string {
    var URL = '';
    if (res5 == '1') {
      URL = '/programmes/res/routine-naturelle';
    } else if (res5 == '2') {
      if (res4 == '3' && res3 == '3' && res1 == '3') {
        URL = '/programmes/res/routine-structuree';
      } else {
        URL = '/programmes/res/routine-simple';
      }
    } else if (res5 == '3') {
      if (res3 == '1') {
        if (res4 == '1') {
          URL = '/programmes/res/routine-simple';
        } else {
          URL = '/programmes/res/routine-simple';
        }
      } else {
        URL = '/programmes/res/routine-structuree';
      }
    }

    console.log(URL);
    return URL;

    // var a = 0,
    //   b = 0,
    //   c = 0;
    // const A1 = ['1', '2', '3'];
    // const A3 = ['1'];
    // const A4 = ['1', '2'];
    // const A5 = ['2'];
    // const B1 = ['2', '3'];
    // const B3 = ['2', '3'];
    // const B4 = ['1', '2', '3'];
    // const B5 = ['3'];
    // const C1 = ['1', '2', '3'];
    // const C3 = ['1', '2', '3'];
    // const C4 = ['1', '2', '3'];
    // const C5 = ['1'];
    // if (A5.includes(res5)) {
    //   a = a + 3;
    // }
    // if (B5.includes(res5)) {
    //   b = b + 3;
    // }
    // if (C5.includes(res5)) {
    //   c = c + 3;
    // }
    // // serie 1
    // if (A1.includes(res1)) {
    //   a = a + 1;
    // }
    // if (B1.includes(res1)) {
    //   b = b + 1;
    // }
    // if (C1.includes(res1)) {
    //   c = c + 1;
    // }
    // //serie 2
    // if (A1.includes(res1)) {
    //   a = a + 1;
    // }
    // if (B1.includes(res1)) {
    //   b = b + 1;
    // }
    // if (C1.includes(res1)) {
    //   c = c + 1;
    // }
    // //serie 3
    // if (A1.includes(res1)) {
    //   a = a + 1;
    // }
    // if (B1.includes(res1)) {
    //   b = b + 1;
    // }
    // if (C1.includes(res1)) {
    //   c = c + 1;
    // }
    // console.log(A1.includes(res1));
  }
  
  algoProfil(res1: string, res2:string, res3: string, res4: string) : string{
    var URL = '';
    if(res1=='2' && res2=='4' && res3=='2'){
      if(res4=='2' || res4=='3'){
        URL = '/profil-beaute';
      }
    }
    return URL;
  }
}

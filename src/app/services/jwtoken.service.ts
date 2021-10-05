import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JWTokenService {
  expToken: any;
  tokenPayload: any;
  expirationDate!: any;
  constructor(
    private jwtHelper: JwtHelperService,
    private localStorage: LocalStorageService
  ) {}

  getToken() {
    this.expToken = '';
    this.expToken = this.localStorage.get('x-access-token');
  }

  GetTokenDecoded() {
    this.getToken();
    this.tokenPayload = JSON.stringify(
      this.jwtHelper.decodeToken(this.expToken)
    );
    return this.tokenPayload;
  }

  getTokenExpirationDate() {
    this.getToken();
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
    return this.expirationDate;
  }
  isAuthenticated(): boolean {
    this.getToken();
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY='my-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)
  token = '';
  constructor(private http: HttpClient) { 
    this.loadToken();
  }
  async loadToken(){}
  login(){}
  logout(){}

}

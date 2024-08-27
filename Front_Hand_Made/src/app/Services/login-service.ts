import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../Interfaces/login-interface';
import { RegisterInterface } from '../Interfaces/register-interface';

@Injectable({ // Adaugă acest decoratori pentru a face clasa injectabilă
  providedIn: 'root', // Acesta face serviciul disponibil în întreaga aplicație
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login: LoginInterface = {
    username: 'exampleUser',
    password: 'examplePassword'
  };

  register: RegisterInterface = {
    userName: '',
    password: '',
    role: ''
  }

  Login(username: string, password: string) {
    //https://localhost:7091/api/user/login
    this.login.password = password;
    this.login.username = username;
    return this.httpClient.post(`https://localhost:7091/api/user/login`, this.login);
  }

  Auth(username: string, password: string, role: string) {
    this.register.userName = username;
    this.register.password = password;
    this.register.role = role;
    return this.httpClient.post(`https://localhost:7091/api/user/register`, this.register);
  }
}

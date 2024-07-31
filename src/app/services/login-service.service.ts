import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private LOGIN_URL: string = 'http://localhost:8080/ProyectoFinalBackend/api/auth/login';
  private USERS_URL: string = `http://localhost:8080/ProyectoFinalBackend/api/user`;
  private LOANS_URL: string = `http://localhost:8080/ProyectoFinalBackend/api/loan`;
  private KEY: string = 'token';

  getToken(credentials: any): Observable<any> {
    return this.httpClient.post(this.LOGIN_URL, credentials);
  }

  verifyCredentials(email: string, password: string): Observable<any> {
    return this.httpClient.get(`${this.USERS_URL}/${email}/${password}`);
  }

  setToken(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  getPayload(): any {
    const token = localStorage.getItem(this.KEY);
    if (token != null) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
      } catch (e) {
        console.error('Error parsing token payload', e);
        this.clearToken();
        this.router.navigate(['']);
      }
    } else {
      this.router.navigate(['']);
    }
  }

  clearToken(): void {
    localStorage.clear();
  }

  getPendingLoans(email: string): Observable<any> {
    return this.httpClient.get(`${this.LOANS_URL}/user/pending/${email}`);
  }
}

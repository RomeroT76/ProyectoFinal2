import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient, 
    private router: Router) { }

  private LOGIN_URL: string = 'http://localhost:8080/ProyectoFinalBackend/api/auth/login';
  // Se debe pasar como parametros adicionales a la ruta el usuario y contraseña a la ruta
  private USERS_URL: string = `http://localhost:8080/ProyectoFinalBackend/api/user`;
  private KEY: string = 'token';

  getToken(credentials: any): Observable<any> {
    return this.httpClient.post(this.LOGIN_URL, credentials);
  }

  verifyCredentials(email: string, password: string): Observable<any> {
    return this.httpClient.get(this.USERS_URL+`/${email}/${password}`);
  }

  setToken(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  getPayload(): any {
    const token = localStorage.getItem(this.KEY);
    if (token != null) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } else {
      this.router.navigate(['']);
    }
  }

  clearToken(): void {
    localStorage.clear();
  }
}

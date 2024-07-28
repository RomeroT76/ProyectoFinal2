import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private CREATE_USER_URL = 'http://localhost:8080/ProyectoFinalBackend/api/user/create';

  constructor(private httpClient: HttpClient) { }

  createUSer(user: User): Observable<any> {
    return this.httpClient.post<any>(this.CREATE_USER_URL, Object.assign({}, user));
  }
}

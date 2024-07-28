import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private CREATE_USER_URL = 'http://localhost:8080/ProyectoFinalBackend/api/user/create';
  private UPDATE_USER_URL = 'http://localhost:8080/ProyectoFinalBackend/api/user/update';

  constructor(private httpClient: HttpClient) { }

  createUSer(user: User): Observable<any> {
    return this.httpClient.post<any>(this.CREATE_USER_URL, Object.assign({}, user));
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put<any>(this.UPDATE_USER_URL, Object.assign({}, user));
  }
}

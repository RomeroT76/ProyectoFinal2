import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from '../domain/Mail';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private EMAIL_URL = 'http://localhost:8080/ProyectoFinalBackend/api/email/send';

  constructor(private httpClient: HttpClient) { }

  sendEmail(mail: Mail) {
    return this.httpClient.post<any>(this.EMAIL_URL, Object.assign({}, mail));
  }
}

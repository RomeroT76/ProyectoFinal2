import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  obtenerLibros(title: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=s${title}`)
  }
}

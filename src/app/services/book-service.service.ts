import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/Book';



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private CREATE_BOOK_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/create';
  private BOOKS_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book';

  constructor(private httpClient: HttpClient) { }

  saveBook(book: Book) {
    return this.httpClient.post<any>(this.CREATE_BOOK_URL, Object.assign({}, book));
  }

  getBoks() {
    return this.httpClient.get(this.BOOKS_URL);
  }
}

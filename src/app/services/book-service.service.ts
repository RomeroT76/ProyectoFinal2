import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/Book';



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private CREATE_BOOK_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/create';
  private BOOKS_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book';
  private DELETE_BOOK_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/delete/';
  private UPDATE_BOOK_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/update';
  private SEARCH_BY_GENERE_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/genere/';
  private SEARCH_BY_NAME_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/name/';
  private SEARCH_BY_AUTHOR_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/author/';

  constructor(private httpClient: HttpClient) { }

  saveBook(book: Book) {
    return this.httpClient.post<any>(this.CREATE_BOOK_URL, Object.assign({}, book));
  }

  getBoks() {
    return this.httpClient.get(this.BOOKS_URL);
  }

  deleteBook(id: number){
    return this.httpClient.delete<any>(this.DELETE_BOOK_URL + id);
  }

  updateBook(book: Book) {
    return this.httpClient.put<any>(this.UPDATE_BOOK_URL, Object.assign({}, book));
  }

  searchByGenere(genere: string) {
    return this.httpClient.get(this.SEARCH_BY_GENERE_URL + genere);
  }

  searchByName(genere: string) {
    return this.httpClient.get(this.SEARCH_BY_NAME_URL + genere);
  }

  searchByAuthor(genere: string) {
    return this.httpClient.get(this.SEARCH_BY_AUTHOR_URL + genere);
  }
}

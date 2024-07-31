import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/Book';
import { Observable } from 'rxjs';


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
  private BOOK_BY_ID_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/';
  private SEARCH_BY_AVAILABILITY_URL = 'http://localhost:8080/ProyectoFinalBackend/api/book/availability/';

  constructor(private httpClient: HttpClient) { }

  saveBook(book: Book) {
    return this.httpClient.post<any>(this.CREATE_BOOK_URL, Object.assign({}, book));
  }

  getBoks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.BOOKS_URL);
  }

  deleteBook(id: number){
    return this.httpClient.delete<any>(this.DELETE_BOOK_URL + id);
  }

  updateBook(book: Book): Observable<void> {
    return this.httpClient.put<any>(this.UPDATE_BOOK_URL, Object.assign({}, book));
  }
  // updateBook(book: Book) {
  //   return this.httpClient.put<any>(this.UPDATE_BOOK_URL, Object.assign({}, book));
  // }

  searchByGenere(genere: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.SEARCH_BY_GENERE_URL + genere);
  }
  
  searchByName(name: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.SEARCH_BY_NAME_URL + name);
  }
  
  searchByAuthor(author: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.SEARCH_BY_AUTHOR_URL + author);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.BOOK_BY_ID_URL}${id}`);
  }

  searchBookByAvailability(availability: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.SEARCH_BY_AVAILABILITY_URL + availability);
  }

}

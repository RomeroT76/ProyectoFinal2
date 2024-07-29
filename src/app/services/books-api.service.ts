import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient: HttpClient) { }

  getBooks(name: string) {
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=s${name}`);
  }
}

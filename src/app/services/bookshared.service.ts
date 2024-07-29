import { Injectable } from '@angular/core';
import { Book } from '../domain/Book';

@Injectable({
  providedIn: 'root'
})
export class BookSharedService {
  private book: Book | null = null;

  setBook(book: Book) {
    this.book = book;
  }

  getBook(): Book | null {
    return this.book;
  }

  clearBook() {
    this.book = null;
  }
}

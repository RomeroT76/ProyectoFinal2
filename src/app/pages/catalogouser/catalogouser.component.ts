import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookSharedService } from '../../services/bookshared.service';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-catalogouser',
  standalone: true,
  imports: [],
  templateUrl: './catalogouser.component.html',
  styleUrl: './catalogouser.component.scss'
})
export class CatalogouserComponent {
  result: any[] = [];
  authors: any[] = [];
  titles: any[] = [];
  categories: any[] = [];
  bookData: any;
  

  constructor(private bookService: BookServiceService, private bookSharedService: BookSharedService) {}

  ngOnInit(): void {
    this.getAddedBooks();
  }

  getAddedBooks() {
    this.bookService.getBoks().subscribe(
      data => {
        this.bookData = data;
        this.bookData.map(
          (book:any) => {
            this.authors.push(book.author);
            this.titles.push(book.name);
            this.categories.push(book.genere);
          }
        )
      }
    );
  }

  searchByGenere(genere: string) {
    this.result = [];
    this.bookService.searchByGenere(genere).subscribe(
      data => {
        this.bookData = data;
        this.bookData.map(
          (book:any) => {
            this.result.push(book);
          }
        );
      }
    );
  }

  searchByName(name: string) {
    this.result = [];
    this.bookService.searchByName(name).subscribe(
      data => {
        this.bookData = data;
        this.bookData.map(
          (book:any) => {
            this.result.push(book);
          }
        );
      }
    );
  }

  searchByAuthor(author: string) {
    this.result = [];
    this.bookService.searchByAuthor(author).subscribe(
      data => {
        this.bookData = data;
        this.bookData.map(
          (book:any) => {
            this.result.push(book);
          }
        );
      }
    );
  }

}

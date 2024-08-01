import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { BooksApiService } from '../../services/books-api.service';
import { BookServiceService } from '../../services/book-service.service';
import { Book } from '../../domain/Book';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
  booksData: any;
  name: string = '';
  books: any[] = [];
  book?: Book;

  constructor(private booksApiService: BooksApiService, private bookService: BookServiceService) { }

  ngOnInit(): void { }

  searchBook() {
    this.books = [];
    this.booksApiService.getBooks(this.name).subscribe(data => {
      this.booksData = Object.assign({}, data);
      this.booksData.items.forEach((item: any) => {
        this.books.push(item.volumeInfo);
      });
    });
    this.name = '';
  }

  addBook(name: string, genere: string, image: string, author: string) {
    this.book = new Book();
    this.book.name = name;
    this.book.genere = genere;
    this.book.image = image;
    this.book.author = author;
    this.bookService.saveBook(this.book).subscribe({
      next: () => {
        alert("Libro agregado correctamente");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

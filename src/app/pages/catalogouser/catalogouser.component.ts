import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookSharedService } from '../../services/bookshared.service';
import { LoansService } from '../../services/loans.service';
import { LoginServiceService } from '../../services/login-service.service';
import { Loan } from '../../domain/Loan';
import { Book } from '../../domain/Book'; // Asegúrate de importar el tipo Book
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogouser',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './catalogouser.component.html',
  styleUrls: ['./catalogouser.component.scss']
})
export class CatalogouserComponent implements OnInit {
  result: Book[] = [];
  authors: string[] = [];
  availability: string[] = [];
  titles: string[] = [];
  categories: string[] = [];
  bookData: Book[] = [];
  userEmail: string = ''; // Inicializado como una cadena vacía

  constructor(
    private bookService: BookServiceService,
    private bookSharedService: BookSharedService,
    private loansService: LoansService,
    private loginService: LoginServiceService
  ) {}

  ngOnInit(): void {
    this.getUserEmail();
    this.getAddedBooks();
  }

  getUserEmail() {
    const payload = this.loginService.getPayload();
    console.log('Payload:', payload);
    if (payload && payload.sub) {
      this.userEmail = payload.sub;
    } else {
      console.error('No se pudo obtener el email del payload.');
    }
    console.log('User Email:', this.userEmail);
  }

  getAddedBooks() {
    this.bookService.getBoks().subscribe((data: Book[]) => {
      this.bookData = data;
      this.bookData.forEach((book: Book) => {
        if (book.author) {
          if (!this.authors.includes(book.author)) {
            this.authors.push(book.author);
          }
        }
        if (book.name) {
          if (!this.titles.includes(book.name)) {
            this.titles.push(book.name);
          }
        }
        if (book.genere) {
          if (!this.categories.includes(book.genere)) {
            this.categories.push(book.genere);
          }
        }
        if (book.availability) {
          if (!this.availability.includes(book.availability)) {
            this.availability.push(book.availability);
          }
        }
      });
    });
  }

  searchByGenere(genere: string) {
    this.result = [];
    this.bookService.searchByGenere(genere).subscribe((data: Book[]) => {
      this.bookData = data;
      this.result = [...this.bookData];
    });
  }
  
  searchByName(name: string) {
    this.result = [];
    this.bookService.searchByName(name).subscribe((data: Book[]) => {
      this.bookData = data;
      this.result = [...this.bookData];
    });
  }
  
  searchByAuthor(author: string) {
    this.result = [];
    this.bookService.searchByAuthor(author).subscribe((data: Book[]) => {
      this.bookData = data;
      this.result = [...this.bookData];
    });
  }

  searchByAvailability(availability: string) {
    this.result = [];
    this.bookService.searchBookByAvailability(availability).subscribe((data: Book[]) => {
      this.bookData = data;
      this.result = [...this.bookData];
    });
  }

  createLoan(bookId: number) {
    this.bookService.getBookById(bookId).subscribe((book: Book) => {
      if (book && book.id && book.name && book.image && book.author) {
        if (book.availability === 'loaned') {
          alert('El libro no está disponible para préstamo.');
          return;
        }
        
        const loan: Loan = {
          id: 0,  // Inicializa con 0 o null
          book: {
            id: book.id,
            name: book.name,
            image: book.image,
            author: book.author
          },
          user: { email: this.userEmail },
          status: 'loaned',
          loanDate: new Date(),
          returnDate: undefined
        };
  
        this.loansService.createLoan(loan).subscribe({
          next: response => {
            console.log('Préstamo creado:', response);
          },
          error: err => {
            console.error('Error al crear el préstamo:', err);
          }
        });
      }
    });
  }
  
  
  
}

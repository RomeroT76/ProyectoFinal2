import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';
import { Book } from '../../domain/Book';
import { BookSharedService } from '../../services/bookshared.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  catalog: any;

  constructor(private bookService: BookServiceService, private router: Router, private bookSharedService: BookSharedService) {}

  ngOnInit(): void {
    this.getAddedBooks();
  }

  getAddedBooks() {
    this.bookService.getBoks().subscribe({
      next: res => {
        this.catalog = res;
      },
      error: err => console.log(err)
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.getAddedBooks(); // Actualizar el catálogo después de la eliminación
      },
      error: err => console.error('Error deleting book', err)
    });
  }

  updateBook(book: Book) {
    this.bookSharedService.setBook(book); // Almacenar el libro seleccionado en el servicio compartido
    this.router.navigate(['/editlibro']); // Redirigir a la vista de edición
  }
}

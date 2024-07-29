import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { RouterLink } from '@angular/router';
import { Book } from '../../domain/Book';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  catalog: any;

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAddedBooks();
  }

  getAddedBooks() {
    return this.bookService.getBoks().subscribe({
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
    this.bookService.updateBook(book).subscribe({
      next: updatedBook => {
        console.log('Book updated successfully', updatedBook);
        this.getAddedBooks(); // Actualizar el catálogo después de la actualización
      },
      error: err => console.error('Error updating book', err)
    });
  }
}

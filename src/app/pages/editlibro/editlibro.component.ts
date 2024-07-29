import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';

import { Book } from '../../domain/Book';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookSharedService } from '../../services/bookshared.service';

@Component({
  selector: 'app-editlibro',
  standalone: true,
  imports: [ReactiveFormsModule], // Asegúrate de importar ReactiveFormsModule aquí
  templateUrl: './editlibro.component.html',
  styleUrls: ['./editlibro.component.scss']
})
export class EditlibroComponent implements OnInit {
  bookForm: FormGroup;
  book: Book | null = null;

  constructor(
    private fb: FormBuilder,
    private bookService: BookServiceService,
    private bookSharedService: BookSharedService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      name: [''],
      author: [''],
      image: [''],
      genere: [''],
      availability: ['']
    });
  }

  ngOnInit(): void {
    this.book = this.bookSharedService.getBook();
    if (this.book) {
      this.bookForm.patchValue(this.book);
    }
  }

  onSaveChanges() {
    if (this.book) {
      const updatedBook: Book = {
        ...this.book,
        ...this.bookForm.value
      };
      this.bookService.updateBook(updatedBook).subscribe({
        next: () => {
          this.bookSharedService.clearBook();
          this.router.navigate(['/catalogo']);
        },
        error: err => console.error('Error updating book', err)
      });
    }
  }
}

import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
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
}

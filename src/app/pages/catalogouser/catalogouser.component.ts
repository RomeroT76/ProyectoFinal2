import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookSharedService } from '../../services/bookshared.service';

@Component({
  selector: 'app-catalogouser',
  standalone: true,
  imports: [],
  templateUrl: './catalogouser.component.html',
  styleUrl: './catalogouser.component.scss'
})
export class CatalogouserComponent {
  catalog: any;

  constructor(private bookService: BookServiceService, private bookSharedService: BookSharedService) {}

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

}

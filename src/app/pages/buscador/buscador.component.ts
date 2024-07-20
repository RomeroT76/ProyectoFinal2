import { Component } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { FormsModule } from '@angular/forms';
import { Libro } from '../../domain/Libro';


@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  booksData: any;
  titulo: string = '';
  libros: any[] = []
  libro? : Libro

  constructor(private booksService: BooksServiceService) { }

  ngOnInit(): void {

  }

  buscarLibros() {
    this.libros = []
    this.booksService.obtenerLibros(this.titulo).subscribe(data => {
      this.booksData = Object.assign({}, data)

      this.booksData.items.map((item: any) => {
        console.log(item.volumeInfo);
        this.libros.push(item.volumeInfo)
        console.log(`agregando ${item.volumeInfo.title}`);
      })
    })
    this.titulo = ''
  }
  // guardarLibro(title:any, authors: any, publisher: any,  description: any, imageLink: any) {
  //   this.libro = new Libro()
  //   this.libro.title = title
  //   this.libro.authors = authors
  //   this.libro.publisher = publisher 
  //   this.libro.description = description
  //   this.libro.imageLink = imageLink
  //   this.fireStoreService.guardarLibro(this.libro)
  //   alert('libro agregado correctamente')
  //   this.libro = undefined
  // }

}

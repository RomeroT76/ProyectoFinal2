import { Component } from '@angular/core';

import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  libros: any

  // ngOnInit(): void {
  //   this.fireStoreService.obtenerLibros().then(data => {
  //     this.libros = data.docs.map((doc: any) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     })
  //   })
  // }

  // borrarlibro(id: string) {
  //   this.fireStoreService.borrarLibro(id);
  //   this.ngOnInit()
  // }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogouser',
  standalone: true,
  imports: [],
  templateUrl: './catalogouser.component.html',
  styleUrl: './catalogouser.component.scss'
})
export class CatalogouserComponent {

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

import { Component } from '@angular/core';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  libros: any
  rol: string;

  constructor(private comunicacionService: ComunicacionService) {
    this.rol = ''
    this.comunicacionService.suscribe().subscribe(data => {
      this.rol = data;
    })
  }

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

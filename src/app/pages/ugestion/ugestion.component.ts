import { Component } from '@angular/core';
import { Usuario } from '../../domain/Usuario';
import { FormsModule } from '@angular/forms';
import { ComunicacionService } from '../../services/comunicacion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ugestion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ugestion.component.html',
  styleUrl: './ugestion.component.scss'
})
export class UgestionComponent {

  usuario: Usuario = new Usuario();
  usuarios: any;
  id: any;

  constructor(private comunicacionService: ComunicacionService) {
  }

  // ngOnInit() {
  //   this.fireStoreService.obtenerUsuarios().then(data => {
  //     this.usuarios = data.docs.map((doc: any) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     });

  //   }
  //   );
  //   console.log('a');
    
  // }

  // guardar() {
  //   this.fireStoreService.registrarUsuario(this.usuario)
  // }

  // borrar(id: string) {
  //   this.fireStoreService.borrarUsuarios(id).then(() => {
  //   }).catch(error => {
  //   });
  //   this.ngOnInit()
  // }

  obtenerUsuario(id: any) {
    this.id = id
    for (let value of this.usuarios) {
      if (this.id === value.id) {
        this.usuario.name = value.name;
        this.usuario.userName = value.userName;
        this.usuario.mail = value.mail;
        this.usuario.rol = value.rol;
        this.usuario.password = value.password;
        this.comunicacionService.setOUsusario(this.usuario);
        this.comunicacionService.setId(this.id);
      }
    }

  }
}

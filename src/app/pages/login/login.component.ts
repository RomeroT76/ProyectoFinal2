import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: any
  user: any
  password: any;

  constructor(private comunicacionService: ComunicacionService) { }

  // ngOnInit(): void {
  //   this.fireStoreService.obtenerUsuarios().then (data => {
  //     this.users = data.docs.map((doc: any) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     })
  //   })
    
  // }

  verificarUsuario() {
    this.users.map((data: any) => {
     
      if(this.user === data.userName && this.password === data.password) {
        this.comunicacionService.setValue(data.rol);
        this.comunicacionService.setUValue(data.userName);
        this.comunicacionService.setId(data.id);
      }
    })
  }


}

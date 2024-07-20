import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-nav-bar-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-users.component.html',
  styleUrl: './nav-bar-users.component.scss'
})
export class NavBarUsersComponent {
  user: string;
  id: string;

  constructor(private comunicacionService: ComunicacionService) {
    this.user = "";
    this.id = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comunicacionService.uSuscribe().subscribe(data => {
      this.user = data;
    });

    this.comunicacionService.suscribeOId().subscribe(data => {
      this.id = data;
    })

  }

  cerrarSesion() {
    this.comunicacionService.setValue('');
    this.comunicacionService.setUValue('');
  }

  enviarid() {
    this.comunicacionService.setId(this.id)
  }
}

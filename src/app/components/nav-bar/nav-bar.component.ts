import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  currentUser: string;

  constructor(private comunicacionService: ComunicacionService) {
    this.currentUser = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comunicacionService.uSuscribe().subscribe(data => {
      this.currentUser = data;
    });
  }

  cerrarSesion() {
    this.comunicacionService.setValue('');
    this.comunicacionService.setUValue('');
  }
}


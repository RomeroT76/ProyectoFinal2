import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule], // Asegúrate de añadir CommonModule aquí
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private coreService: CoreServiceService, private router: Router) { }

  logOut(): void {
    alert("Cerrando sesión");
    localStorage.clear();
    this.coreService.setRol("");
    this.router.navigate([""]);
  }

  toggleMenu() {
    const nav = document.querySelector('.navegacion ul');
    nav?.classList.toggle('active');
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private coreService: CoreServiceService,
    private router: Router
  ) { }

  logOut(): void {
    alert("Cerrando sesion");
    localStorage.clear();
    this.coreService.setRol("");
    this.router.navigate([""]);
  }
}


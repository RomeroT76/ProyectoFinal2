import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-nav-bar-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-users.component.html',
  styleUrl: './nav-bar-users.component.scss'
})
export class NavBarUsersComponent {

  constructor(private router: Router,
    private coreService: CoreServiceService
  ) { }

  logOut(): void {
    alert("Cerrando sesion");
    localStorage.clear();
    this.coreService.setRol("");
    this.router.navigate([""]);
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoreServiceService } from '../../services/core-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar-users',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar-users.component.html',
  styleUrls: ['./nav-bar-users.component.scss']
})
export class NavBarUsersComponent {

  constructor(private router: Router, private coreService: CoreServiceService) { }

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

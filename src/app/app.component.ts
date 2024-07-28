// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarUsersComponent } from './components/nav-bar-users/nav-bar-users.component';
import { NavBarAnyComponent } from './components/nav-bar-any/nav-bar-any.component';
import { AuthService } from './services/auth.service'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavBarUsersComponent, NavBarAnyComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
  role: 'admin' | 'client' | 'guest';

  constructor(private authService: AuthService) {
    this.role = this.authService.getRole();
  }

  setRole(role: 'admin') {
    this.authService.setRole(role);
    this.role = role; // Actualiza el rol en el componente
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-users.component.html',
  styleUrl: './nav-bar-users.component.scss'
})
export class NavBarUsersComponent {
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-any',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-any.component.html',
  styleUrl: './nav-bar-any.component.scss'
})
export class NavBarAnyComponent {

  redirect() {
    window.open("http://localhost:8080/ProyectoFinalBackend/faces/SobreNosotros.xhtml");
  }
}

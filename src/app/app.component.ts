import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarUsersComponent } from './components/nav-bar-users/nav-bar-users.component';
import { NavBarAnyComponent } from './components/nav-bar-any/nav-bar-any.component';
import { ComunicacionService } from './services/comunicacion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent, NavBarUsersComponent, NavBarAnyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-final';
  role: any = ''

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comunicacionService.suscribe().subscribe(data => {
      console.log(data);
      this.role = data;
    })
  }
}

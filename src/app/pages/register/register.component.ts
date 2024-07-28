import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../domain/User';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  passwordC: string = '';
  user?: User;

  constructor(private userService: UserServiceService, private router: Router) { }

  createUSer(): void {
    if(this.email != '' && this.password != '' && this.password === this.passwordC) {
      this.user = new User();
      this.user.email = this.email;
      this.user.password  = this.password;
      this.userService.createUSer(this.user).subscribe({
        next: res => {
          alert("Usuario Creado Exitosamente");
          this.router.navigate(["login"])
        },     
        error: e => {
        alert("Error: " + e.error);
        }
      });        
    }
  }
}

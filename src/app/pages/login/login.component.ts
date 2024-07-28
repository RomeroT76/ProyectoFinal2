import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginServiceService, 
    private router: Router,
    private coreService: CoreServiceService) { }

  login(): void {
    if (this.email != '' && this.password != '') {
      this.loginService.verifyCredentials(this.email, this.password).subscribe({
        next: res => {
          this.loginService.getToken(res).subscribe({
            next: res => {
             this.loginService.setToken(res.token);
             this.coreService.setRol(this.loginService.getPayload().role)
             alert("Inicio de sesion exitoso");
             this.router.navigate(['']);
            }
          })
        },
        error: e => {
          alert(e.error);
        }
      });
    } 
  }
}

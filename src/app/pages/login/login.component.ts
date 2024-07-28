import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';

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

  constructor(private loginService: LoginServiceService) { }

  login(): void {
    if (this.email != '' && this.password != '') {
      this.loginService.verifyCredentials(this.email, this.password).subscribe({
        next: res => {
          this.loginService.getToken(res).subscribe({
            next: res => {
             this.loginService.setToken(res.token);
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

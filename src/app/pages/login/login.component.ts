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
  styleUrls: ['./login.component.scss']
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
              this.coreService.setRol(this.loginService.getPayload().role);
              this.checkPendingLoans(this.email);  // Verificar préstamos pendientes
            },
            error: e => {
              console.error('Error getting token', e);
              alert('Error getting token');
            }
          });
        },
        error: e => {
          console.error('Error verifying credentials', e);
          alert(e.error);
        }
      });
    }
  }

  checkPendingLoans(email: string): void {
    this.loginService.getPendingLoans(email).subscribe({
      next: (loans: any[]) => {
        if (loans.length > 0) {
          alert('Tienes préstamos pendientes por devolver.');
        }
        this.router.navigate(['']); // Navigate after checking pending loans
      },
      error: e => {
        console.error('Error al obtener préstamos pendientes', e);
        this.router.navigate(['']); // Navigate even if there's an error
      }
    });
  }
}
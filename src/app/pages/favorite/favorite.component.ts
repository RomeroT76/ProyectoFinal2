import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../services/loans.service';
import { LoginServiceService } from '../../services/login-service.service';
import { Loan } from '../../domain/Loan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  userLoans: Loan[] = [];

  constructor(
    private loansService: LoansService,
    private loginService: LoginServiceService
  ) {}

  ngOnInit(): void {
    this.loadUserLoans();
  }

  getUserEmail(): string {
    const payload = this.loginService.getPayload();
    return payload?.sub || '';
  }

  loadUserLoans() {
    const email = this.getUserEmail();
    if (email) {
      this.loansService.getLoansByUser(email).subscribe({
        next: (loans: Loan[]) => {
          this.userLoans = loans;
        },
        error: (err) => {
          console.error('Error al obtener los préstamos del usuario:', err);
        }
      });
    }
  }

 returnLoan(loanId: number): void {
  this.loansService.returnLoan(loanId).subscribe({
    next: () => {
      console.log('Préstamo devuelto correctamente');
      alert("Devolucion Exitosa");
      this.loadUserLoans(); // Recargar los préstamos del usuario
    },
    error: (err) => {
      console.error('Error al devolver el préstamo:', err);
    }
  });
}
}

import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../services/loans.service'; // Asegúrate de que la ruta sea correcta
import { Loan } from '../../domain/Loan'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private loansService: LoansService) {}

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.loansService.getLoans().subscribe({
      next: (loans: Loan[]) => {
        this.loans = loans;
      },
      error: (err) => {
        console.error('Error al obtener los préstamos:', err);
      }
    });
  }
}

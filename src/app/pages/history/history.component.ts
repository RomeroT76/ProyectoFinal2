import { Component, OnInit } from '@angular/core';
import { LoansService } from '../../services/loans.service';
import { Loan } from '../../domain/Loan';
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
  topUser: any[] = [];
  topBook: any[] = [];

  constructor(private loansService: LoansService) {}

  ngOnInit(): void {
    this.loadLoans();
    this.loadTopUser();
    this.loadTopBook();
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

  loadTopUser(): void {
    this.loansService.getTopUser().subscribe({
      next: (data: any[]) => {
        console.log('Top User:', data);
        this.topUser = data;
      },
      error: (err) => {
        console.error('Error al obtener el usuario con más préstamos:', err);
      }
    });
  }

  loadTopBook(): void {
    this.loansService.getTopBook().subscribe({
      next: (data: any[]) => {
        console.log('Top Book:', data);
        this.topBook = data;
      },
      error: (err) => {
        console.error('Error al obtener el libro más prestado:', err);
      }
    });
  }
}

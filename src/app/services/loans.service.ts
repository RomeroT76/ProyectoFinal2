import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../domain/Loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private CREATE_LOAN_URL = 'http://localhost:8080/ProyectoFinalBackend/api/loan/create';
  private RETURN_LOAN_URL = 'http://localhost:8080/ProyectoFinalBackend/api/loan/return';
  private GET_LOANS_URL = 'http://localhost:8080/ProyectoFinalBackend/api/loan';
  private GET_USER_LOANS_URL = 'http://localhost:8080/ProyectoFinalBackend/api/loan/user'; // URL para obtener préstamos por usuario

  constructor(private httpClient: HttpClient) { }

  // Método para crear un préstamo
  createLoan(loan: Loan): Observable<any> {
    return this.httpClient.post(this.CREATE_LOAN_URL, loan);
  }

  // Método para devolver un préstamo
  returnLoan(loanId: number): Observable<void> {
    return this.httpClient.put<void>(`${this.RETURN_LOAN_URL}/${loanId}`, {});
  }
  
  // Método para obtener todos los préstamos
  getLoans(): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(this.GET_LOANS_URL);
  }

  // Método para obtener un préstamo por ID
  getLoan(id: number): Observable<Loan> {
    return this.httpClient.get<Loan>(`${this.GET_LOANS_URL}/${id}`);
  }

  // Método para obtener préstamos por el email del usuario
  getLoansByUser(email: string): Observable<Loan[]> {
    return this.httpClient.get<Loan[]>(`${this.GET_USER_LOANS_URL}/${email}`);
  }
}



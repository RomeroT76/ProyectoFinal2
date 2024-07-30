// loan.ts
export class Loan {
  id: number; // Agregado
  book: {
    id: number;
    name: string;        // Nombre del libro
    image: string;       // URL de la imagen del libro
    author: string;      // Autor del libro
  };
  user: {
    email: string;       // Email del usuario
  };
  status: 'Reservado' | 'Devuelto'; // Estado del préstamo
  loanDate: Date;       // Fecha del préstamo
  returnDate?: Date;    // Fecha de devolución (opcional)

  constructor(
    id: number, // Agregado
    book: { id: number; name: string; image: string; author: string },
    user: { email: string },
    status: 'Reservado' | 'Devuelto',
    loanDate: Date,
    returnDate?: Date
  ) {
    this.id = id; // Agregado
    this.book = book;
    this.user = user;
    this.status = status;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
  }
}

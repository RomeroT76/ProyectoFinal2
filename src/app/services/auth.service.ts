// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: 'admin' | 'client' | 'guest';

  constructor() {
    const storedRole = localStorage.getItem('userRole');
    this.userRole = storedRole ? storedRole as 'admin' | 'client' | 'guest' : 'guest';
  }

  getRole(): 'admin' | 'client' | 'guest' {
    return this.userRole;
  }

  setRole(role: 'admin' | 'client' | 'guest') {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  private ROL: string;
  private oROL: BehaviorSubject<string>;
  private euaEMAIL: string;
  private euaOEMAIL: BehaviorSubject<string>;
  private euaROL: string;
  private euaOROL: BehaviorSubject<string>;

  constructor() { 
    this.ROL = "";
    this.euaROL = "";
    this.euaEMAIL = "";
    this.oROL = new BehaviorSubject<string>("");
    this.euaOROL = new BehaviorSubject<string>("");
    this.euaOEMAIL = new BehaviorSubject<string>("");
  }

  setRol(rol: string) {
    this.ROL = rol;
    this.oROL.next(this.ROL);   
  }

  getRol() {
    return this.oROL.asObservable();
  }

  setEuaRol(rol: string) {
    this.euaROL = rol;
    this.euaOROL.next(this.euaROL);
  }

  getEuaRol() {
    return this.euaOROL.asObservable();
  }

  setEuaEmail(email: string) {
    this.euaEMAIL = email;
    this.euaOEMAIL.next(this.euaEMAIL);
  }

  getEuaEmail() {
    return this.euaOEMAIL.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  private ROL: string;
  private oROL: BehaviorSubject<string>;

  constructor() { 
    this.ROL = "";
    this.oROL =new BehaviorSubject<string>("");
  }

  setRol(rol: string) {
    this.ROL = rol;
    this.oROL.next(this.ROL);   
  }

  getRol() {
    return this.oROL.asObservable();
  }
}

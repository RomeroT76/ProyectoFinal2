import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../domain/Usuario';


@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  usuario?: Usuario;
  id: string;
  rol: string;
  userName: string;
  oValue: BehaviorSubject<string>;
  uValue: BehaviorSubject<string>;
  oUsuario: BehaviorSubject<Usuario>;
  oId: BehaviorSubject<string>;


  constructor() {
    this.rol= '';
    this.userName= '';
    this.id = '';
    this.usuario = new Usuario();
    this.oValue = new BehaviorSubject<string>(this.rol);
    this.uValue = new BehaviorSubject<string>(this.userName);
    this.oUsuario = new BehaviorSubject<Usuario>(this.usuario);
    this.oId = new BehaviorSubject<string>(this.id);
  }

  setValue(value: string) {
    this.rol = value;
    this.oValue.next(this.rol);
  }

  suscribe() {
    return this.oValue.asObservable();
  }

  setUValue(uvalue: string) {
    this.userName = uvalue;
    this.uValue.next(this.userName);
  }

  uSuscribe() {
    return this.uValue.asObservable();
  }

  setOUsusario(usuario: Usuario) {
    this.usuario = usuario;
    this.oUsuario.next(this.usuario);
  }

  susbribeOUsuario() {
    return this.oUsuario.asObservable();
  }

  setId(id: string) {
    this.id = id;
    this.oId.next(this.id);
  }

  suscribeOId() {
    return this.oId.asObservable();
  }
}

export class Usuario {
    name: any
    userName: any
    mail: any
    rol: any
    password: any

    set(name: any, userName: any, mail: any, rol: any, password: any) {
        this.name = name;
        this.userName = userName;
        this.mail = mail;
        this.rol = rol;
        this.password = password;
    }
}
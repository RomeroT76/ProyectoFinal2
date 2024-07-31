import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../domain/User';
import { CoreServiceService } from '../../services/core-service.service';
import { UpperCasePipe } from '@angular/common';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-edituseradmin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edituseradmin.component.html',
  styleUrl: './edituseradmin.component.scss'
})
export class EdituseradminComponent {

  email: string = '';
  rol: string = '';
  password: string = '';
  passwordC: string = '';
  user?: User;

  constructor(private coreService: CoreServiceService,
    private userService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.coreService.getEuaEmail().subscribe(
      data => {
        this.email = data;
      }
    );

    this.coreService.getEuaRol().subscribe(
      data => {
        this.rol = data;
      }
    );
  }

  modifyAccount() {
    if (this.password != '' && this.password === this.passwordC) {
      this.user = new User();
      this.user.email = this.email;
      this.user.rol = this.rol.toUpperCase();
      this.user.password = this.password;
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          alert("Credenciales modificadas exitosamente")
          this.router.navigate(["/ugestion"]);
          this.password = '';
          this.passwordC = '';
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}

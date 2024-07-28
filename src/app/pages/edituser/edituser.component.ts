import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { LoginServiceService } from '../../services/login-service.service';
import { User } from '../../domain/User';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.scss'
})
export class EdituserComponent {
  email: string = '';
  password: string = '';
  passwordC: string = '';
  user?: User;

  constructor(private userService: UserServiceService,
    private loginService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.email = this.loginService.getPayload().user;
  }

  modifyAccount() {
    if(this.password != '' && this.password === this.passwordC) {
      this.user = new User();
      this.user.email = this.email;
      this.user.password = this.password;
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          this.router.navigate([""]);
          this.password = '';
          this.passwordC = '';
        },
        error: err => {
          alert(err.error);
        }
      })
    };
  }
}

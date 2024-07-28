import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { CoreServiceService } from '../../services/core-service.service';

@Component({
  selector: 'app-ugestion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ugestion.component.html',
  styleUrl: './ugestion.component.scss'
})
export class UgestionComponent {

  users: any;

  constructor(private userService: UserServiceService,
    private coreService: CoreServiceService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  sendCredentials(email: string, rol:string) {
    this.coreService.setEuaEmail(email);
    this.coreService.setEuaRol(rol);
  }
}

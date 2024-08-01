import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { CoreServiceService } from '../../services/core-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ugestion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ugestion.component.html',
  styleUrls: ['./ugestion.component.scss']
})
export class UgestionComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserServiceService,
    private coreService: CoreServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
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

  sendCredentials(email: string, rol: string) {
    this.coreService.setEuaEmail(email);
    this.coreService.setEuaRol(rol);
    this.router.navigate(['/edituser']);
  }
}

import {Component, OnInit} from '@angular/core';
import {UserManagerService} from '../services/user-manager.service';
import {Router} from '@angular/router';
import {Role} from '../domain/constants/Role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;

  constructor(
    private userManager: UserManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = this.userManager.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.isAdmin = token.role === Role.ADMIN;
  }

}

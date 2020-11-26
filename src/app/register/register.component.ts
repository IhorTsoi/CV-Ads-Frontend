import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/api/authentication.service';
import {Router} from '@angular/router';
import { RegisterData } from '../domain/auth/RegisterData';
import {LanguageSelectorService} from '../services/language-selector.service';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private languageService: LanguageSelectorService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public async onRegisterAsync(): Promise<void> {
    const registerData: RegisterData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    const errorMessage = await this.authenticationService
      .registerCustomerAsync(registerData);

    if (!errorMessage) {
      await this.router.navigate(['/login']);
      if (this.languageService.getPreferredLanguage() === 'ua') {
        this.notificationService.displayMessage('Реєстрація пройшла успішно ✅');
      } else {
        this.notificationService.displayMessage('The registration was successful ✅');
      }
      return;
    }
    this.errorMessage = errorMessage;
  }
}

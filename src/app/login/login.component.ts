import { Component, OnInit } from '@angular/core';
import {Credentials} from '../domain/auth/Credentials';
import {AuthenticationService} from '../services/api/authentication.service';
import {Router} from '@angular/router';
import {NotificationService} from '../services/notification.service';
import {LanguageSelectorService} from '../services/language-selector.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private languageService: LanguageSelectorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public async onLoginAsync(): Promise<void> {
    const userCredentials: Credentials = {
      login: this.username,
      password: this.password
    };
    let errorMessage = await this.authenticationService.loginAdminAsync(userCredentials);
    if (!errorMessage) {
      this.showSuccessNotification();
      await this.router.navigate(['/home']);
      return;
    }
    errorMessage = await this.authenticationService.loginCustomerAsync(userCredentials);
    if (!errorMessage) {
      this.showSuccessNotification();
      await this.router.navigate(['/home']);
      return;
    }

    this.errorMessage = errorMessage;
  }

  private showSuccessNotification(): void {
    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage('Користувач пройшов автентифікацію ✅');
    } else {
      this.notificationService.displayMessage('The user is logged in ✅');
    }
  }
}

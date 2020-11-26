import { Component, OnInit } from '@angular/core';
import {RegisterAdminData} from '../../domain/RegisterAdminData';
import {AuthenticationService} from '../../services/api/authentication.service';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private languageService: LanguageSelectorService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public async onRegisterAsync(): Promise<void> {
    const registerAdminData: RegisterAdminData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    const errorMessage = await this.authenticationService
      .registerAdminAsync(registerAdminData);

    if (errorMessage) {
      this.errorMessage = errorMessage;
    } else {
      this.resetLocalData();
      if (this.languageService.getPreferredLanguage() === 'ua') {
        this.notificationService.displayMessage('Реєстрація пройшла успішно ✅');
      } else {
        this.notificationService.displayMessage('The registration was successful ✅');
      }
    }
  }

  private resetLocalData(): void {
    this.errorMessage = null;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}

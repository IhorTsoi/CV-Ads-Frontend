import { Component, OnInit } from '@angular/core';
import {RegisterAdminData} from '../../domain/RegisterAdminData';
import {RegisterSmartDeviceData} from '../../domain/RegisterSmartDeviceData';
import {AuthenticationService} from '../../services/api/authentication.service';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-register-smart-device',
  templateUrl: './register-smart-device.component.html',
  styleUrls: ['./register-smart-device.component.css']
})
export class RegisterSmartDeviceComponent implements OnInit {
  public serialNumber: string;
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
    const registerSmartDeviceData: RegisterSmartDeviceData = {
      serialNumber: this.serialNumber,
      password: this.password
    };
    const errorMessage = await this.authenticationService
      .registerSmartDeviceAsync(registerSmartDeviceData);

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
    this.serialNumber = '';
    this.password = '';
  }
}

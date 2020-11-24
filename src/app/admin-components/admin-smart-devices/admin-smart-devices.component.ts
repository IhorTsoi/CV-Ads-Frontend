import {Component, OnInit} from '@angular/core';
import {SmartDeviceService} from '../../services/api/smart-device.service';
import {SmartDevice} from '../../domain/SmartDevice';
import {SmartDeviceMode} from '../../domain/constants/SmartDeviceMode';
import {ImportExportService} from '../../services/api/import-export.service';
import {NotificationService} from '../../services/notification.service';
import {LanguageSelectorService} from '../../services/language-selector.service';
import { MatDialog } from '@angular/material/dialog';
import {AdminResetSmartDeviceComponent} from '../admin-reset-smart-device/admin-reset-smart-device.component';

@Component({
  selector: 'app-admin-smart-devices',
  templateUrl: './admin-smart-devices.component.html',
  styleUrls: ['./admin-smart-devices.component.css']
})
export class AdminSmartDevicesComponent implements OnInit {
  public smartDevices: SmartDevice[];
  public smartDevicePanelExpanded: boolean[];
  public errorMessage: string;

  public Mode = SmartDeviceMode;

  constructor(
    private smartDeviceService: SmartDeviceService,
    private notificationService: NotificationService,
    private languageService: LanguageSelectorService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.smartDeviceService.getAllSmartDevicesAsync()
      .then(smartDevices => this.reloadSmartDevices(smartDevices));
  }

  public onPanelChangeState(index: number, newState: boolean): void {
    this.smartDevicePanelExpanded[index] = newState;
  }

  public async onBlockAsync(index: number): Promise<void> {
    await this.smartDeviceService.blockSmartDeviceAsync(this.smartDevices[index]);
    this.smartDevices[index].mode = SmartDeviceMode.Blocked;

    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage('Розумний пристрій заблоковано ✅');
    } else {
      this.notificationService.displayMessage('The smart device was blocked ✅');
    }
  }

  public async onResetAsync(index: number): Promise<void> {
    this.errorMessage = await this.smartDeviceService.resetSmartDeviceAsync(
      this.smartDevices[index],
      await this.getNewPasswordAsync()
    );
    if (this.errorMessage) {
      return;
    }

    this.smartDeviceService.getAllSmartDevicesAsync()
      .then(smartDevices => this.reloadSmartDevices(smartDevices));

    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage('Налаштування розумного пристрою скинуто ✅');
    } else {
      this.notificationService.displayMessage('The smart device was reset ✅');
    }
  }

  private reloadSmartDevices(smartDevices: SmartDevice[]): void {
    this.smartDevices = smartDevices;
    this.smartDevicePanelExpanded = smartDevices.map(() => false);
  }

  private getNewPasswordAsync(): Promise<string> {
    const dialogRef = this.dialog.open<AdminResetSmartDeviceComponent, never, string>(
      AdminResetSmartDeviceComponent);

    return dialogRef.afterClosed()
      .toPromise()
      .then(newPassword => newPassword ? newPassword : '');
  }
}

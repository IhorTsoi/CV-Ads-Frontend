import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-reset-smart-device',
  templateUrl: './admin-reset-smart-device.component.html',
  styleUrls: ['./admin-reset-smart-device.component.css']
})
export class AdminResetSmartDeviceComponent {
  public newPassword: string;
  constructor(private dialogRef: MatDialogRef<AdminResetSmartDeviceComponent>) { }

  public onSetNewPassword(): void {
    this.dialogRef.close(this.newPassword);
  }
}

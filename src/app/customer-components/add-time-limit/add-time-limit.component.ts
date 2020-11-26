import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TimePeriodLimit} from '../../domain/TimePeriodLimit';

@Component({
  selector: 'app-add-time-limit',
  templateUrl: './add-time-limit.component.html',
  styleUrls: ['./add-time-limit.component.css']
})
export class AddTimeLimitComponent {
  public fromTime: string;
  public toTime: string;

  constructor(private dialogRef: MatDialogRef<AddTimeLimitComponent>) { }

  public onAddTimeLimit(): void {
    const timeLimit = new TimePeriodLimit();
    timeLimit.fromInMinutes = this.convertStringTimeToMinutes(this.fromTime);
    timeLimit.toInMinutes = this.convertStringTimeToMinutes(this.toTime);

    this.dialogRef.close(timeLimit);
  }

  private convertStringTimeToMinutes(timeString: string): number {
    const [hours, minutes] = timeString.split(':').map(s => Number(s));
    return hours * 60 + minutes;
  }

}

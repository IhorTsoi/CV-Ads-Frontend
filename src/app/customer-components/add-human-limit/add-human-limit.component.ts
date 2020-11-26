import { Component, OnInit } from '@angular/core';
import {HumanLimit} from '../../domain/HumanLimit';
import {MatDialogRef} from '@angular/material/dialog';
import {Gender} from '../../domain/constants/Gender';

@Component({
  selector: 'app-add-human-limit',
  templateUrl: './add-human-limit.component.html',
  styleUrls: ['./add-human-limit.component.css']
})
export class AddHumanLimitComponent {
  public humanLimit = new HumanLimit();

  public Gender = Gender;

  constructor(private dialogRef: MatDialogRef<AddHumanLimitComponent>) { }

  public onAddHumanLimit(): void {
    this.humanLimit.gender = Number(this.humanLimit.gender);
    this.dialogRef.close(this.humanLimit);
  }
}

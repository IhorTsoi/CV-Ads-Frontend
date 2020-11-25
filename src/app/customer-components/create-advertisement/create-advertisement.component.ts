import {Component, Input, OnInit} from '@angular/core';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {CreateAdvertisementData} from '../../domain/CreateAdvertisementData';
import { HumanLimit } from 'src/app/domain/HumanLimit';
import { TimePeriodLimit } from 'src/app/domain/TimePeriodLimit';
import {MatDialog} from '@angular/material/dialog';
import {AddHumanLimitComponent} from '../add-human-limit/add-human-limit.component';
import {Gender} from '../../domain/constants/Gender';
import {AddTimeLimitComponent} from '../add-time-limit/add-time-limit.component';
import {Router} from '@angular/router';
import {AdvertisementService} from '../../services/api/advertisement.service';
import {NotificationService} from '../../services/notification.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent {
  @Input() createAdvertisementSubject: Subject<null>;
  public advertisement: CreateAdvertisementData = new CreateAdvertisementData();
  public displayErrorMessages = [];

  private validators = [
    [
      () => this.advertisement.name && this.advertisement.name.trim() !== '',
      () => this.advertisement.viewsLimit && this.advertisement.viewsLimit > 0,
      () => this.advertisement.formFile
    ]
  ];
  private errorMessages = [
    [
      ['The name is required.', 'Ім\'я обов\'язкове для заповнення.'],
      [
        'The views limit is required and must be greater than 0.',
        'Максимальна кількість показів обов\'язкова для заповнення та більше 0.'
      ],
      [
        'The picture is required.',
        'Зображення обов\'язкове для для створення оголошення.'
      ]
    ]
  ];

  constructor(
    private advertisementService: AdvertisementService,
    private languageService: LanguageSelectorService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  public get firstStepCompleted(): boolean {
    return this.getStepCompleted(0);
  }

  public get humanLimits(): string[] {
    return this.advertisement.humanLimits.map(humanLimit => {
      if (this.languageService.getPreferredLanguage() === 'ua') {
        let humanLimitLabel = '';
        switch (humanLimit.gender) {
          case Gender.NotSpecified:
            humanLimitLabel += 'чоловік або жінка 👨👩';
            break;
          case Gender.Male:
            humanLimitLabel += 'чоловік 👨';
            break;
          case Gender.Female:
            humanLimitLabel += 'жінка 👩';
            break;
        }
        humanLimitLabel += ` від ${humanLimit.minAge} до ${humanLimit.maxAge} років`;
        return humanLimitLabel;
      } else {
        let humanLimitLabel = '';
        switch (humanLimit.gender) {
          case Gender.NotSpecified:
            humanLimitLabel += 'male or female 👨👩';
            break;
          case Gender.Male:
            humanLimitLabel += 'male 👨';
            break;
          case Gender.Female:
            humanLimitLabel += 'female 👩';
            break;
        }
        humanLimitLabel += ` from ${humanLimit.minAge} to ${humanLimit.maxAge} years old`;
        return humanLimitLabel;
      }
    });
  }

  public get timeLimits(): string[] {
    return this.advertisement.timePeriodLimits.map(timeLimit => {
      const fromTimeLabel = this.getTimeLabelFromMinutes(timeLimit.fromInMinutes);
      const toTimeLabel = this.getTimeLabelFromMinutes(timeLimit.toInMinutes);
      return `${fromTimeLabel} - ${toTimeLabel}`;
    });
  }

  public onNext(index: number): void {
    const ua = 1;
    const en = 0;

    for (let i = 0; i < this.validators[index].length; i++) {
      if (!this.validators[index][i]()) {
        if (this.languageService.getPreferredLanguage() === 'ua') {
          this.displayErrorMessages[index] = this.errorMessages[index][i][ua];
        } else {
          this.displayErrorMessages[index] = this.errorMessages[index][i][en];
        }
        break;
      }
    }
  }

  public onFileSelected(event): void {
    this.advertisement.formFile = event.target.files[0];
  }

  public onAddHumanLimit(): void {
    const dialogRef = this.dialog
      .open<AddHumanLimitComponent, never, HumanLimit>(AddHumanLimitComponent);

    dialogRef.afterClosed()
      .toPromise()
      .then(humanLimit => {
        if (humanLimit) {
          if (this.advertisement.humanLimits) {
            this.advertisement.humanLimits = [...this.advertisement.humanLimits, humanLimit];
          } else {
            this.advertisement.humanLimits = [humanLimit];
          }
        }
      });
  }

  public onAddTimeLimit(): void {
    const dialogRef = this.dialog
      .open<AddTimeLimitComponent, never, TimePeriodLimit>(AddTimeLimitComponent);

    dialogRef.afterClosed()
      .toPromise()
      .then(timeLimit => {
        if (timeLimit) {
          if (this.advertisement.timePeriodLimits) {
            this.advertisement.timePeriodLimits = [...this.advertisement.timePeriodLimits, timeLimit];
          } else {
            this.advertisement.timePeriodLimits = [timeLimit];
          }
        }
      });
  }

  public onDone(): void {
    if (!this.advertisement.humanLimits || this.advertisement.humanLimits.length === 0) {
      this.advertisement.humanLimits = [HumanLimit.GetDefaultHumanLimit()];
    }
    if (!this.advertisement.timePeriodLimits || this.advertisement.timePeriodLimits.length === 0) {
      this.advertisement.timePeriodLimits = [TimePeriodLimit.GetDefaultTimePeriodLimit()];
    }
    this.advertisementService.createAsync(this.advertisement)
      .then(() => {
        this.createAdvertisementSubject.next(null);
        if (this.languageService.getPreferredLanguage() === 'ua') {
          this.notificationService.displayMessage(
            'Оголошення створене ✅');
        } else {
          this.notificationService.displayMessage(
            'The advertisement was created ✅');
        }
      });
  }

  private getStepCompleted(index: number): boolean {
    if (!this.validators[index].every(v => v())) {
      return false;
    }
    this.displayErrorMessages[index] = null;
    return true;
  }

  private getTimeLabelFromMinutes(minutes: number): string {
    const labelHours = Math.floor(minutes / 60).toString();
    const labelMinutes = (minutes % 60).toString();

    return `${labelHours.length === 2 ? labelHours : ('0' + labelHours)}:` +
      `${labelMinutes.length === 2 ? labelMinutes : ('0' + labelMinutes)}`;
  }
}

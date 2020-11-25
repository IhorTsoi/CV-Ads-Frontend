import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Advertisement} from '../../domain/Advertisement';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {Gender} from '../../domain/constants/Gender';
import {AdvertisementStatus} from '../../domain/constants/AdvertisementStatus';
import {View} from '../../domain/View';
import {getDateString, toLocalDate} from '../../services/functions/dateFunctions';
import {AdvertisementService} from '../../services/api/advertisement.service';

const CHART_COLORS = [
  'rgba(255,0,0,0.3)',
  'rgba(0,255,0,0.3)',
  'rgba(0,0,255,0.3)'
];
const DATA_VIEWS_COUNT_INDEX = 0;
const DATA_AUDIENCE_COUNT_INDEX = 1;

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  public pieChartData = {
    labels: [],
    values: [],
    colors: [{backgroundColor: []}],
    options: {
      legend: {
        display: true,
        labels: {
          fontSize: 20,
          fontColor: 'white'
        }
      }
    }
  };
  public barChartData = {
    datasets: [
      {data: [], label: null},
      {data: [], label: null}
    ],
    labels: [],
    options: {
      responsive: true,
      scales: {
        xAxes: [{ticks: {fontSize: 20, fontColor: 'white'}}],
        yAxes: [{ticks: {
            suggestedMin: 0,
            suggestedMax: 1,
            stepSize: 1,
            fontSize: 20,
            fontColor: 'white'
          }}]
      },
      plugins: {datalabels: {anchor: 'end', align: 'end'}},
      legend: {
        display: true,
        labels: {
          fontSize: 20,
          fontColor: 'white'
        }
      }
    }
  };
  public AdvertisementStatus = AdvertisementStatus;

  constructor(
    @Inject(MAT_DIALOG_DATA) public advertisement: Advertisement,
    private advertisementService: AdvertisementService,
    private languageService: LanguageSelectorService
  ) { }

  ngOnInit(): void {
    this.advertisementService.getViewsForAdvertisementAsync(this.advertisement)
      .then((views: View[]) => {
        this.SetPieChartData(views);
        this.setBarChartData(views);
      });
  }

  public get location(): string {
    if (!this.advertisement.countryScope) {
      return this.getLocalizedWholeWorldLabel();
    }
    const countryLabel = this.advertisement.countryScope;
    if (!this.advertisement.cityScope) {
      return countryLabel;
    }
    return `${countryLabel}, ${this.advertisement.cityScope}`;
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

  private SetPieChartData(views: View[]): void {
    views.forEach(view => {
      const locationLabel = `${view.city}@${view.country}`;

      if (this.pieChartData.labels.includes(locationLabel)) {
        const locationIndex = this.pieChartData.labels.indexOf(locationLabel);
        this.pieChartData.values[locationIndex]++;
      } else {
        this.pieChartData.labels.push(locationLabel);
        this.pieChartData.values.push(1);
        this.pieChartData.colors[0].backgroundColor.push(
          CHART_COLORS[(this.pieChartData.labels.length - 1) % CHART_COLORS.length]
        );
      }
    });
  }

  private setBarChartData(views: View[]): void {
    views.sort((firstView, secondView) => {
      const firstDateMilliseconds = toLocalDate(firstView.dateTime).getTime();
      const secondDataMilliseconds = toLocalDate(secondView.dateTime).getTime();
      return firstDateMilliseconds - secondDataMilliseconds;
    });

    views.forEach(view => {
      const dateLabel = getDateString(toLocalDate(view.dateTime));
      const lastIndex = this.barChartData.labels.length - 1;

      if (this.barChartData.labels[lastIndex] === dateLabel) {
        this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data[lastIndex]++;
        this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
          .data[lastIndex] += view.audienceCount;
      } else {
        this.barChartData.labels.push(dateLabel);
        this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data.push(1);
        this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX]
          .data.push(view.audienceCount);
      }
    });
    this.configureBarChartScale();
    this.localizeBarChartLegend();
  }

  private configureBarChartScale(): void {
    const maxBarHeight = Math.max(
      Math.max(...this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].data),
      Math.max(...this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].data)
    ) + 1;
    const stepSize = maxBarHeight < 10 ? 1 : 10;

    this.barChartData.options.scales.yAxes[0].ticks.stepSize = stepSize;
    this.barChartData.options.scales.yAxes[0].ticks.suggestedMax = maxBarHeight;
  }

  private getLocalizedWholeWorldLabel(): string {
    if (this.languageService.getPreferredLanguage() === 'ua') {
      return 'весь світ';
    } else {
      return 'whole world';
    }
  }

  private getTimeLabelFromMinutes(minutes: number): string {
    const labelHours = Math.floor(minutes / 60).toString();
    const labelMinutes = (minutes % 60).toString();

    return `${labelHours.length === 2 ? labelHours : ('0' + labelHours)}:` +
      `${labelMinutes.length === 2 ? labelMinutes : ('0' + labelMinutes)}`;
  }

  private localizeBarChartLegend(): void {
    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Кількість показів';
      this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Об\'єм аудиторії';
    } else {
      this.barChartData.datasets[DATA_VIEWS_COUNT_INDEX].label = 'Views count';
      this.barChartData.datasets[DATA_AUDIENCE_COUNT_INDEX].label = 'Audience count';
    }
  }
}

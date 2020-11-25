import {Component, Input, OnInit} from '@angular/core';
import { View } from 'src/app/domain/View';
import {SmartDevice} from '../../domain/SmartDevice';
import {SmartDeviceService} from '../../services/api/smart-device.service';
import {getDateString, toLocalDate} from '../../services/functions/dateFunctions';
import {LanguageSelectorService} from '../../services/language-selector.service';

const CHART_COLORS = [
  'rgba(255,0,0,0.3)',
  'rgba(0,255,0,0.3)',
  'rgba(0,0,255,0.3)'
];
const DATA_VIEWS_COUNT_INDEX = 0;
const DATA_AUDIENCE_COUNT_INDEX = 1;

@Component({
  selector: 'app-admin-smart-device-statistics',
  templateUrl: './admin-smart-device-statistics.component.html',
  styleUrls: ['./admin-smart-device-statistics.component.css']
})
export class AdminSmartDeviceStatisticsComponent implements OnInit {
  @Input() public smartDevice: SmartDevice;
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

  constructor(
    private smartDeviceService: SmartDeviceService,
    private languageService: LanguageSelectorService
  ) { }

  ngOnInit(): void {
    this.smartDeviceService.getViewsForSmartDeviceAsync(this.smartDevice)
      .then((views: View[]) => {
        this.SetPieChartData(views);
        this.setBarChartData(views);
      });
  }

  public get partnerFullName(): string {
    const defaultFullName = this.getLocalizedNoDataMessage();
    return this.smartDevice.partnerFirstName ?
      `${this.smartDevice.partnerFirstName} ${this.smartDevice.partnerLastName}` :
      defaultFullName;
  }

  public get partnerEmail(): string {
    const defaultEmail = this.getLocalizedNoDataMessage();
    return this.smartDevice.partnerEmail ?? defaultEmail;
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

  private getLocalizedNoDataMessage(): string {
    return this.languageService.getPreferredLanguage() === 'ua' ?
      'немає даних' :
      'none';
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

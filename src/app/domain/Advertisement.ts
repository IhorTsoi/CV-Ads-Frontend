import {AdvertisementStatus} from './constants/AdvertisementStatus';
import {TimePeriodLimit} from './TimePeriodLimit';
import {HumanLimit} from './HumanLimit';

export class Advertisement {
  public id: string;
  public status: AdvertisementStatus;
  public name: string;
  public pictureLink: string;
  public viewsCount: number;
  public viewsLimit: number;
  public countryScope: string;
  public cityScope: string;

  public timePeriodLimits: TimePeriodLimit[];
  public humanLimits: HumanLimit[];
}

import {HumanLimit} from './HumanLimit';
import {TimePeriodLimit} from './TimePeriodLimit';

export class CreateAdvertisementData {
  public name: string;
  public viewsLimit: number;
  public countryScope: string;
  public cityScope: string;
  public formFile: File;
  public humanLimits: HumanLimit[];
  public timePeriodLimits: TimePeriodLimit[];
}

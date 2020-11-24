import {SmartDeviceMode} from './constants/SmartDeviceMode';

export class SmartDevice {
  public id: string;
  public mode: SmartDeviceMode;
  public isTurnedOn: boolean;
  public isCaching: boolean;
  public serialNumber: string;
  public partnerFirstName: string;
  public partnerLastName: string;
  public partnerEmail: string;
}

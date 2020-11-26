import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SmartDevice} from '../../domain/SmartDevice';
import {environment} from '../../../environments/environment';
import {View} from '../../domain/View';

@Injectable({
  providedIn: 'root'
})
export class SmartDeviceService {
  constructor(private http: HttpClient) { }

  public async getAllSmartDevicesAsync(): Promise<SmartDevice[]> {
    const smartDevices = await this.http.get<SmartDevice[]>(
      environment.endpoints.getAllSmartDevices).toPromise();
    return smartDevices;
  }

  public blockSmartDeviceAsync(smartDevice: SmartDevice): Promise<void> {
    const url = environment.endpoints.blockSmartDevice
      .replace('{id}', smartDevice.id);
    return this.http.patch<void>(url, {}).toPromise();
  }

  public resetSmartDeviceAsync(
    smartDevice: SmartDevice, newPassword: string): Promise<string> {
    const url = environment.endpoints.resetSmartDevice
      .replace('{id}', smartDevice.id);

    return this.http.post(url, {newPassword}).toPromise()
      .then(() => null)
      .catch<string>(this.retrieveErrorMessage);;
  }

  public getViewsForSmartDeviceAsync(smartDevice: SmartDevice): Promise<View[]> {
    const url = environment.endpoints.getStatisticsForSmartDevice
      .replace('{id}', smartDevice.id);

    return this.http.get<View[]>(url).toPromise();
  }

  private retrieveErrorMessage(errorResponse: any): string {
    if (errorResponse.error.message) {
      return errorResponse.error.message;
    }
    return Object.values(errorResponse.error.errors).join('\n');
  }
}

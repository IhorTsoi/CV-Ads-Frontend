import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from '../../domain/Advertisement';
import {environment} from '../../../environments/environment';
import { View } from 'src/app/domain/View';
import {CreateAdvertisementData} from '../../domain/CreateAdvertisementData';
import {TimePeriodLimit} from '../../domain/TimePeriodLimit';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor(private http: HttpClient) { }

  public getCustomerAdvertisementsAsync(): Promise<Advertisement[]> {
    return this.http.get<Advertisement[]>(
      environment.endpoints.getCustomerAdvertisements
    ).toPromise()
      .then(advertisements => advertisements.map(ad => {
        ad.pictureLink = environment.baseAPIUrl + ad.pictureLink;
        return ad;
      }));
  }

  public createAsync(advertisementData: CreateAdvertisementData): Promise<void> {
    const formData = new FormData();
    formData.append('name', advertisementData.name);
    formData.append('viewsLimit', advertisementData.viewsLimit.toString());
    if (advertisementData.countryScope) {
      formData.append('countryScope', advertisementData.countryScope);
      if (advertisementData.cityScope) {
        formData.append('cityScope', advertisementData.cityScope);
      }
    }
    formData.append('formFile', advertisementData.formFile, advertisementData.formFile.name);

    for (let i = 0; i < advertisementData.humanLimits.length; i++) {
      const hl = advertisementData.humanLimits[i];
      formData.append(`humanLimits[${i}].Gender`, hl.gender.toString());
      formData.append(`humanLimits[${i}].MinAge`, hl.minAge.toString());
      formData.append(`humanLimits[${i}].MaxAge`, hl.maxAge.toString());
    }
    for (let i = 0; i < advertisementData.timePeriodLimits.length; i++) {
      const tl: TimePeriodLimit = advertisementData.timePeriodLimits[i];
      formData.append(`timePeriodLimits[${i}].FromInMinutes`, tl.fromInMinutes.toString());
      formData.append(`timePeriodLimits[${i}].ToInMinutes`, tl.toInMinutes.toString());
    }

    return this.http.post<void>(
      environment.endpoints.createAdvertisement, formData
    ).toPromise<void>();
  }

  public updateAdvertisementStatusAsync(advertisement: Advertisement): Promise<void> {
    const url = environment.endpoints.changeStatusOfAdvertisement
      .replace('{id}', advertisement.id);

    return this.http.patch<void>(url, {
      newAdvertisementStatus: advertisement.status
    }).toPromise();
  }

  public getViewsForAdvertisementAsync(advertisement: Advertisement): Promise<View[]> {
    const url = environment.endpoints.getStatisticsForAdvertisement
      .replace('{id}', advertisement.id);

    return this.http.get<View[]>(url).toPromise();
  }
}

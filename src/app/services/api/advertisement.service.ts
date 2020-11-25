import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertisement} from '../../domain/Advertisement';
import {environment} from '../../../environments/environment';
import { View } from 'src/app/domain/View';

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

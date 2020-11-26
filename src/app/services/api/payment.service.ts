import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }

  public getCustomerPaymentAmountAsync(): Promise<number> {
    return this.http.get<number>(environment.endpoints.getCustomerPaymentAmount)
      .toPromise();
  }

  public payAsync(): Promise<number> {
    return this.http.post<number>(environment.endpoints.payCustomer, {})
      .toPromise();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserManagerService} from '../user-manager.service';
import {Credentials} from '../../domain/auth/Credentials';
import {Token} from '../../domain/auth/Token';
import {environment} from '../../../environments/environment';
import {RegisterData} from '../../domain/auth/RegisterData';
import {RegisterAdminData} from '../../domain/RegisterAdminData';
import {RegisterSmartDeviceData} from '../../domain/RegisterSmartDeviceData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private userManager: UserManagerService
  ) { }

  public registerCustomerAsync(registerData: RegisterData): Promise<string> {
    return this.http.post(environment.endpoints.registerCustomer, registerData)
      .toPromise()
      .then(() => null)
      .catch<string>(this.retrieveErrorMessage);
  }

  public registerAdminAsync(registerData: RegisterAdminData): Promise<string> {
    return this.http.post(environment.endpoints.registerAdmin, registerData)
      .toPromise()
      .then(() => null)
      .catch<string>(this.retrieveErrorMessage);
  }

  public registerSmartDeviceAsync(registerData: RegisterSmartDeviceData): Promise<string> {
    return this.http.post(environment.endpoints.registerSmartDevice, registerData)
      .toPromise()
      .then(() => null)
      .catch<string>(this.retrieveErrorMessage);
  }

  public loginCustomerAsync(credentials: Credentials): Promise<string> {
    return this.loginAsync(environment.endpoints.loginCustomer, credentials);
  }

  public loginAdminAsync(credentials: Credentials): Promise<string> {
    return this.loginAsync(environment.endpoints.loginAdmin, credentials);
  }

  private loginAsync(loginEndpoint: string, credentials: Credentials): Promise<string> {
    return this.http.post(loginEndpoint, credentials)
      .toPromise()
      .then<string>((token: Token) => {
        this.userManager.saveToken(token);
        return null;
      })
      .catch<string>(this.retrieveErrorMessage);
  }

  private retrieveErrorMessage(errorResponse: any): string {
    if (errorResponse.error.message) {
      return errorResponse.error.message;
    }
    return Object.values(errorResponse.error.errors).join('\n');
  }
}

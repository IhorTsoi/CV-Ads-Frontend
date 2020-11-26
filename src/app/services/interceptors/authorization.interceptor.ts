import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserManagerService} from '../user-manager.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private userManager: UserManagerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userManager.getToken();

    if (token !== null) {
      const authorizedRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token.accessToken)
      });
      return next.handle(authorizedRequest);
    }
    return next.handle(request);
  }
}

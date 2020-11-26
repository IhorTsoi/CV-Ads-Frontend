import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LanguageSelectorService} from '../language-selector.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor(private languageSelectorService: LanguageSelectorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const preferredLanguage = this.languageSelectorService.getPreferredLanguage();

    const languageRequest = request.clone({
      headers: request.headers.set('Accept-Language', preferredLanguage)
    });
    return next.handle(languageRequest);
  }
}

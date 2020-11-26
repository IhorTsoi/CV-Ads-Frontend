import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

const PREFERRED_LANGUAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'ua';

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectorService {
  constructor() { }

  public getPreferredLanguage(): string {
    const preferredLanguage = localStorage[PREFERRED_LANGUAGE_KEY];
    if (preferredLanguage) {
      return preferredLanguage;
    }
    return DEFAULT_LANGUAGE;
  }

  public setPreferredLanguage(preferredLanguage: string): void {
    localStorage[PREFERRED_LANGUAGE_KEY] = preferredLanguage;
    const a = document.createElement('a');
    if (preferredLanguage === 'ua') {
      a.href = environment.selfUAVersion;
    } else {
      a.href = environment.selfENVersion;
    }
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

import { Injectable } from '@angular/core';

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
  }
}

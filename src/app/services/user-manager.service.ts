import { Injectable } from '@angular/core';
import {Token} from '../domain/auth/Token';
import {BehaviorSubject, Observable} from 'rxjs';

const TOKEN_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
  private $tokenUpdate: BehaviorSubject<null> = new BehaviorSubject(null);

  constructor() { }

  public getTokenUpdateStream(): Observable<null> {
    return this.$tokenUpdate;
  }

  public getToken(): Token {
    const tokenJSON = sessionStorage[TOKEN_STORAGE_KEY];
    if (tokenJSON) {
      return JSON.parse(tokenJSON);
    }
    return null;
  }

  public saveToken(token: Token): void {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
    this.$tokenUpdate.next(null);
  }

  public deleteToken(): void {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    this.$tokenUpdate.next(null);
  }
}

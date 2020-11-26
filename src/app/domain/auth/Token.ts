import {Role} from '../constants/Role';

export class Token {
  public firstName: string;
  public lastName: string;
  public role: Role;
  public lastPaidDate: Date;
  public accessToken: string;
  public expiresAt: Date;
}

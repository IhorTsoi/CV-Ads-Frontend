import {Gender} from './constants/Gender';

export class HumanLimit {
  public gender: Gender;
  public minAge: number;
  public maxAge: number;

  public static GetDefaultHumanLimit(): HumanLimit {
    return {gender: Gender.NotSpecified, minAge: 0, maxAge: 100};
  }
}

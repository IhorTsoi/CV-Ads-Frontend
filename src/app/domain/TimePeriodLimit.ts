export class TimePeriodLimit {
  public fromInMinutes: number;
  public toInMinutes: number;

  public static GetDefaultTimePeriodLimit(): TimePeriodLimit {
    return {fromInMinutes: 0, toInMinutes: 1439};
  }
}

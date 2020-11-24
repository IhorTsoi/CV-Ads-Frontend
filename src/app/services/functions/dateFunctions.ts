export function toLocalDate(dateString: string): Date {
  const time = new Date(dateString);
  const offset = -(new Date().getTimezoneOffset());
  time.setMinutes(time.getMinutes() + offset);

  return time;
}

export function getDateString(date: Date): string {
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
}

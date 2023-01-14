import { getTwoDigitsString } from './helpers';

export default class BirthDate {
  protected digitsArray: number[];

  constructor(
    protected readonly day: number,
    protected readonly month: number,
    protected readonly year: number
  ) {
    // Checking recieved values
    if (month > 12 || month < 1) {
      throw new BirthDateError(
        `Wrong month argument value: ${month}`
      );
    }
    if (year < 1000) {
      throw new BirthDateError(`Wrong year argument value: ${year}`);
    }
    if (new Date(year, month - 1, day).getTime() > Date.now()) {
      throw new BirthDateError('Used birth date from the feature');
    }

    const maxDaysInMonth = new Date(
      new Date(year, month, 1).getTime() - 43_200_000
    ).getDate();
    if (day > maxDaysInMonth || day < 1) {
      throw new BirthDateError(`Wrong day argument value: ${day}`);
    }

    // Create digitsArray
    this.digitsArray = [];

    const dayString = getTwoDigitsString(day);
    const monthString = getTwoDigitsString(month);
    const yearString = year.toString();

    this.digitsArray = `${dayString}${monthString}${yearString}`
      .split('')
      .map((valueString) => parseInt(valueString));
  }

  toString(): string {
    const day = this.digitsArray.slice(0, 2).join('');
    const month = this.digitsArray.slice(2, 4).join('');
    const year = this.digitsArray.slice(4).join('');
    return `${day}.${month}.${year}`;
  }
}

export class BirthDateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BirthDateError';
  }
}

import { SingleDigit } from 'types';
import NumerologyBirthDate from './NumerologyBirthDate';

export default class NatalChart {
  private natalChart: number[];

  constructor(private birthDate: NumerologyBirthDate) {
    // Create natal chart
    this.natalChart = Array(9)
      .fill(0)
      .map((val, idx) => this.birthDate.getNumberAmount(idx + 1));
  }

  getMatches(): string[] {
    const matches: string[] = [];
    this.natalChart.forEach((val, idx) => {
      if (val > 0) {
        matches.push((idx + 1).toString().repeat(val));
      }
    });
    return matches;
  }
}

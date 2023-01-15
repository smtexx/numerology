import { arrowCodes } from '../data/arrowCodes';
import { Arrows } from 'types';
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

  getArrows(): Arrows[] {
    const arrows: Arrows[] = [];

    Object.entries(arrowCodes).forEach(([arrowName, arrowCode]) => {
      const code = arrowCode
        .slice(0, 3)
        .split('')
        .map((val) => parseInt(val));
      const flag = arrowCode.slice(-1);

      if (
        flag === '+' &&
        this.natalChart[code[0]] &&
        this.natalChart[code[1]] &&
        this.natalChart[code[2]]
      ) {
        arrows.push(arrowName as Arrows);
      }

      if (
        flag === '-' &&
        !this.natalChart[code[0]] &&
        !this.natalChart[code[1]] &&
        !this.natalChart[code[2]]
      ) {
        arrows.push(arrowName as Arrows);
      }
    });

    return arrows;
  }
}

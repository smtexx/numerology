import { Peak } from 'types';
import { calculateFlatSum, calculateTopPeakValue } from './helpers';
import NumerologyBirthDate from './NumerologyBirthDate';

export default class Pyramid {
  readonly peaks: [Peak, Peak, Peak, Peak];

  constructor(private birthDate: NumerologyBirthDate) {
    const base = [birthDate.month, birthDate.day, birthDate.year].map(
      (val) => parseInt(calculateFlatSum(val))
    );

    const baseAge = 36 - parseInt(birthDate.getRulingNumber());

    // First peak
    const firstPeak: Peak = {
      value: parseInt(
        calculateFlatSum((base[0] + base[1]).toString())
      ),
      age: baseAge,
      year: birthDate.yearNumber + baseAge,
    };

    // Second peak
    const secondPeak: Peak = {
      value: parseInt(
        calculateFlatSum((base[1] + base[2]).toString())
      ),
      age: firstPeak.age + 9,
      year: firstPeak.year + 9,
    };

    // Third peak
    const thirdPeak: Peak = {
      value: calculateTopPeakValue(firstPeak.value, secondPeak.value),
      age: secondPeak.age + 9,
      year: secondPeak.year + 9,
    };

    const fourthPeak: Peak = {
      value: calculateTopPeakValue(base[0], base[2]),
      age: thirdPeak.age + 9,
      year: thirdPeak.year + 9,
    };

    this.peaks = [firstPeak, secondPeak, thirdPeak, fourthPeak];
  }
}

import NumerologyBirthDate from '../src/modules/NumerologyBirthDate';
import NatalChart from '../src/modules/NatalChart';

describe('NatalChart', () => {
  test('Returns correct structure from getMatches method', () => {
    let birthDate = new NumerologyBirthDate(27, 5, 1983);
    let natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual([
      '1',
      '2',
      '3',
      '5',
      '7',
      '8',
      '9',
    ]);

    birthDate = new NumerologyBirthDate(4, 4, 1988);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual(['1', '44', '88', '9']);

    birthDate = new NumerologyBirthDate(11, 1, 1999);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual(['1111', '999']);
  });
});

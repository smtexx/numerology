import {
  sumDigits,
  calculateFlatSum,
  calculateSum,
  getTwoDigitsString,
} from '../src/modules/helpers';

describe('Function getTwoDigitsString', () => {
  test('Add 0 to one digit', () => {
    expect(getTwoDigitsString(5)).toBe('05');
  });
  test('Returns passed value, converted to string', () => {
    expect(getTwoDigitsString(57)).toBe('57');
  });
});

describe('Function sumDigits', () => {
  test('Calculate sum 5', () => {
    expect(sumDigits('5')).toBe('5');
  });
  test('Calculate sum 000', () => {
    expect(sumDigits('000')).toBe('0');
  });
  test('Calculate sum 0845', () => {
    expect(sumDigits('0845')).toBe('17');
  });
});

describe('Function calculateFlatSum', () => {
  test('Returns initial number of 1 digit', () => {
    expect(calculateFlatSum('5')).toBe('5');
  });
  test('Returns correct sum of digits', () => {
    expect(calculateFlatSum('15')).toBe('6');
    expect(calculateFlatSum('99')).toBe('9');
    expect(calculateFlatSum('458')).toBe('8');
    expect(calculateFlatSum('1009')).toBe('1');
    expect(calculateFlatSum('0000')).toBe('0');
  });
});

describe('Function calculateSum', () => {
  test('Returns correct sum of digits', () => {
    expect(calculateSum('04041988')).toBe('7');
    expect(calculateSum('01051940')).toBe('2');
  });
  test('Returns correct value in special cases', () => {
    expect(calculateSum('03051940')).toBe('22/4');
    expect(calculateSum('09051949')).toBe('10');
    expect(calculateSum('01051949')).toBe('11');
  });
});

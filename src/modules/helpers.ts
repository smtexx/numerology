export function getTwoDigitsString(value: number): string {
  const stringValue = value.toString();
  return stringValue.length === 2 ? stringValue : `0${stringValue}`;
}

export function calculateSum(value: string): string {
  if (value === '22') {
    return '22/4';
  }
  if (value === '10' || value === '11' || value.length === 1) {
    return value;
  }
  return calculateSum(sumDigits(value));
}

export function calculateFlatSum(value: string): string {
  if (value.length === 1) {
    return value;
  }
  return calculateFlatSum(sumDigits(value));
}

export function sumDigits(value: string): string {
  return value
    .split('')
    .map((valueString) => parseInt(valueString))
    .reduce((prev, curr) => prev + curr, 0)
    .toString();
}

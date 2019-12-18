export function sum(...number) {
  return number.reduce((total, n) => total + n, 0);
}

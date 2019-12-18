import { sum } from './calculator';

test('should allow to sum numbers', () => {
  const result = sum(5, 7, 5);

  expect(result).toBe(17);
});

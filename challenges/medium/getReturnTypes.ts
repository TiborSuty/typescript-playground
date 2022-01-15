// Assignment: Implement the built-in ReturnType<T> generic without using it.

// Solution
type CustomReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

// Test
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type CustomReturnTypeTest = CustomReturnType<typeof fn>;

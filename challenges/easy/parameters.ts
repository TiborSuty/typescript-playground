// Assignment: Implement the built-in Parameters generic without using it.

// Solution
type CustomParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

// Test
type CustomParametersTest = CustomParameters<
  (a: string, b: number, c: boolean) => string
>;

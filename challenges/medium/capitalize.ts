// https://github.com/type-challenges/type-challenges/blob/master/questions/110-medium-capitalize/README.md
// Assignment: Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// Solution
type CustomCapitalize<S extends string> =
  S extends `${infer first}${infer rest}` ? `${Uppercase<first>}${rest}` : S;

// Test
type CustomCapitalizeTest = CustomCapitalize<"hello world">;

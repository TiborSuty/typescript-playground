// Assignment: Compute the length of a string literal, which behaves like String#length.

// Solution
type CustomLengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer L}${infer R}`
  ? CustomLengthOfString<R, [L, ...T]>
  : T["length"];

// Test
type CustomLengthOfStringTest = CustomLengthOfString<"Test">;

// https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.md
// Assignment: Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// Solution
type CustomTrimLeft<S extends string> = S extends `${infer first}${infer rest}`
  ? first extends RemoveType
    ? CustomTrimLeft<rest>
    : S
  : S;

// Test
type CustomTrimLeftTest = CustomTrimLeft<"  Hello World  ">;

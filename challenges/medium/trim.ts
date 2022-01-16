// https://github.com/type-challenges/type-challenges/blob/master/questions/108-medium-trim/README.md
// Assignment: Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// Solution
type RemoveType = " " | "\n" | "\t";
type CustomTrim<S extends string> = S extends `${RemoveType}${infer rest}`
  ? CustomTrim<rest>
  : S extends `${infer first}${RemoveType}`
  ? CustomTrim<first>
  : S;

// Test
type CustomTrimTest = CustomTrim<"  Hello World  ">;

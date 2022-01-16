// https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md
// Assignment: Implement Replace<S, From, To> which replace the string From with To once in the given string S

// Solution
type CustomReplace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer T}${From}${infer F}`
  ? `${T}${To}${F}`
  : S;

// Test
type CustomReplaceTest = CustomReplace<"types are fun!", "fun", "awesome">;

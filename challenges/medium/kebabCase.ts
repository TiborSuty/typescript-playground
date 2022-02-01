// Assignment: FooBarBaz -> foo-bar-baz

// Solution
type CustomKebabCase<
  S extends string,
  P extends string = ""
> = S extends `${infer L}${infer R}`
  ? L extends Lowercase<L>
    ? `${L}${CustomKebabCase<R, "-">}`
    : `${P}${Lowercase<L>}${CustomKebabCase<R, "-">}`
  : S;

// Test
type CustomKebabCaseTest = CustomKebabCase<"FooBarBaz">;

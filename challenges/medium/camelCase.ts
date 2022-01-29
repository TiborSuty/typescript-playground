// Assignment: for-bar-baz -> forBarBaz

// Solution
type UpFirst<T extends string> = T extends `${infer L}${infer R}`
  ? L extends Uppercase<L>
    ? `${L}${R}`
    : `${Uppercase<L>}${R}`
  : T;

type CamelCase<S extends string> = S extends `${infer F}-${infer R}`
  ? R extends `${UpFirst<R>}`
    ? `${F}-${CamelCase<R>}`
    : `${F}${CamelCase<UpFirst<R>>}`
  : S;

// Test
type a = CamelCase<"foo-bar-baz">;

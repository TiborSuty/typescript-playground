// Assignment: Drop a specified char from a string.

// Solution
type DropChar<S extends string, C extends string> = C extends ""
  ? DropChar<S, " ">
  : S extends `${infer F}${infer R}`
  ? F extends C
    ? `${DropChar<R, C>}`
    : `${F}${DropChar<R, C>}`
  : S;

// Test
type DropCharTest = DropChar<" b u t t e r f l y ! ", " ">;

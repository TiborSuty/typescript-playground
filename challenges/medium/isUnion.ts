// Assignment:  Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

// Solution
type CustomIsUnion<T, U extends T = T> = T extends U
  ? [U] extends [T]
    ? false
    : true
  : false;

// Test
type CustomIsUnionTest = CustomIsUnion<string>;
type CustomIsUnionTest2 = CustomIsUnion<string | number>;

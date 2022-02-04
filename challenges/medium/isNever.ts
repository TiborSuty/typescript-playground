// Assignment: Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

// Solution
type CustomIsNever<T extends unknown> = [T] extends [never] ? true : false;

// Test
type CustomIsNeverTest = CustomIsNever<never>;
type CustomIsNeverTest2 = CustomIsNever<never | string>;

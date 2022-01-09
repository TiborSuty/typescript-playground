// Assignment: Implement a generic First<T> that takes an Array T and returns it's first element's type.

// Solution
type CustomFirst<T extends any[]> = T extends [infer A, ...infer B] ? A : never;

// Test
type CustomFirstTest = CustomFirst<["a", "b", "c"]>;

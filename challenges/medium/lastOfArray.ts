// Assignment: Implement a generic Last<T> that takes an Array T and returns its last element.

// Solution
type CustomLast<T extends any[]> = T extends [...infer R, infer L] ? L : never;

// Test
type arr1 = ["a", "b", "c"];

type CustomLastTest = CustomLast<arr1>;

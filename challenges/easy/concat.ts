// Assignment: Implement the JavaScript Array.concat function in the type system.
// A type takes the two arguments. The output should be a new array that includes inputs in ltr order

// Solution
type CustomConcat<T extends any[], K extends any[]> = [...T, ...K];

// Test
type CustomConcatTest = CustomConcat<[1, 2], [3]>;

// Assignment: Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.

// Solution
type CustomIncludes<T extends unknown[], K> = T extends [infer First, ...infer Rest] ? 

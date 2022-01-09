// Assignment: Implement the built-in Exclude<T, U>

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
// Solution
type CustomExclude<T, U> = T extends U ? never : T;

// Test
type CustomExcludeTest = CustomExclude<"a" | "b", "a">;
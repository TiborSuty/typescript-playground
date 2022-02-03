// Assignment: Implement Python liked any function in the type system.
// A type takes the Array and returns true if any element of the Array is true.
// If the Array is empty, return false.

// Solution
type False = 0 | "" | false | [] | Record<any, never>;
type CustomAnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends False
    ? CustomAnyOf<R>
    : true
  : false;

// Test
type CustomAnyOfTest = CustomAnyOf<
  [1, "test", true, [1], { name: "test" }, { 1: "test" }]
>;
type CustomAnyOfTest2 = CustomAnyOf<[0, "", false, [], {}]>;

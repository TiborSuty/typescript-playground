// Assignment: Implement permutation type that transforms union types into the array that includes permutations of unions.

// Solution
type CustomPermutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...CustomPermutation<Exclude<U, T>>]
  : [];

// Test
type CustomPermutationTest = CustomPermutation<"A" | "B" | "C">;

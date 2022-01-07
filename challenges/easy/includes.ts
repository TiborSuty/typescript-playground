// Assignment: Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.
import { Equal } from "../hard/equal";

// Solution
type CustomIncludes<T extends unknown[], K> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, K> extends true
    ? true
    : CustomIncludes<Rest, K>
  : false;

// Test
type CustomIncludesTest = CustomIncludes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Dio"
>;
type CustomIncludesTest2 = CustomIncludes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Kars"
>;

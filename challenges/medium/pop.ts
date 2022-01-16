// Assignment: Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// Solution
type CustomPop<T extends unknown[]> = T extends [...infer R, infer L]
  ? R
  : never;

// Test
type arr2 = ["a", "b", "c", "d"];

type CustomPopTest = CustomPop<arr2>;

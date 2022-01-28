// Assignment: Implement the String to Union type. Type take string argument. The output should be a union of input letters

// Solution
type CustomStringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | CustomStringToUnion<R>
  : never;

// Test
type CustomStringToUnionTest = CustomStringToUnion<"hello">;

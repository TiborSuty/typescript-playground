// Assignment: Write a type that takes an array and emitted the flatten array type

// Solution
type CustomFlatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...CustomFlatten<First>, ...CustomFlatten<Rest>]
    : [First, ...CustomFlatten<Rest>]
  : T;

// Test
type CustomFlattenTest = CustomFlatten<[1, [2]]>;

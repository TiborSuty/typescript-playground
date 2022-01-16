// Assignment: Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// Solution
type CustomTupleToUnion<T extends unknown[]> = T[number];

// Test
type Arr = ["1", "2", "3"];

type CustomTupleToUnionTest = CustomTupleToUnion<Arr>;

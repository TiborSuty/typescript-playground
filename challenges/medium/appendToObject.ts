// Assignment: Implement a type that adds a new field to the interface.
// The type takes the three arguments. The output should be an object with the new field.

// Solution
type CustomAppendToObject<
  T extends Record<string, any>,
  U extends string,
  V extends any
> = {
  [K in keyof T | U]: K extends U ? V : T[K];
};

// Test
type Test = { id: "1" };
type CustomAppendToObjectTest = CustomAppendToObject<Test, "value", 4>;

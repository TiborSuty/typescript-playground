// Assignment: Give an array, transform into an object type and the
// key/value must in the given array.

// Solution
type CustomTupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

//  Test
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type CustomTupleToObjectTest = CustomTupleToObject<typeof tuple>;

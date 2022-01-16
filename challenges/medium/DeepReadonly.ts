// Assignment: Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
// You can assume that we are only dealing with Objects in this challenge.
// Arrays, Functions, Classes and so on are no need to take into consideration.
// However, you can still challenge your self by covering different cases as many as possible.

// Solution
type List = string | number | boolean | undefined | null | Function;

type CustomDeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends List ? T[P] : CustomDeepReadonly<T[P]>;
};

// Test
type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type CustomDeepReadonlyTest = CustomDeepReadonly<X>;

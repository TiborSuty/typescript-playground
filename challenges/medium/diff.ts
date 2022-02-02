// Assignment: Get an Object that is the difference between O & O1

// Solution
export type CustomDiff<O, O1> = {
  [P in keyof O | keyof O1 as Exclude<P, keyof O & keyof O1>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};

// Test
type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type CustomDiffTest = CustomDiff<Foo, Bar>;

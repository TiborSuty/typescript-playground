// Assignment: Merge two types into a new type. Keys of the second type overrides keys of the first type.

// Solution
type CustomMerge<
  F extends Record<string, any>,
  S extends Record<string, any>
> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

// Test
type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type CustomMergeType = CustomMerge<Foo, Bar>;

// Assignment: Implement RemoveIndexSignature<T> , exclude the index signature from object types.

// Solution
type CustomRemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : K extends number
    ? never
    : K]: T[K];
};

// Test
type Foo23 = {
  [key: string]: any;
  foo(): void;
};

type CustomRemoveIndexSignatureTest = CustomRemoveIndexSignature<Foo23>;

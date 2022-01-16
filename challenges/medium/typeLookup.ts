// https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md

// Solution
type CustomLookup<U, T> = U extends {
  type: T;
}
  ? U
  : never;

// Test
interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type CustomLookupTest = CustomLookup<Cat | Dog, "dog">;

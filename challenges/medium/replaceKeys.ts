// Assignment: Implement a type ReplaceKeys, that replace keys in union types,
// if some type has not this key, just skip replacing, A type takes three arguments.

// Solution
type CustomReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

// Test
type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type CustomReplaceKeysTest = CustomReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>;

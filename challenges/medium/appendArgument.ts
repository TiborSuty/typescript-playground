// Assignment: https://github.com/type-challenges/type-challenges/blob/master/questions/191-medium-append-argument/README.md

// Solution
type CustomAppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer P
) => infer K
  ? (...args: [...P, A]) => K
  : Fn;

// Test
type Fn = (a: number, b: string) => number;

type CustomAppendArgumentTest = CustomAppendArgument<Fn, boolean>;

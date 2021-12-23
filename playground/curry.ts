type Params<F extends (...args: any[]) => any> = F extends (
  ...args: infer A
) => any
  ? A
  : never;

const fn00 = (name: string, age: number, single: boolean) => true;

type ttt = Parameters<typeof fn00>;
type tttt = Params<typeof fn00>;

type Tail<T extends any[]> = ((...t: T) => any) extends (
  _: any,
  ...tail: infer TT
) => any
  ? TT
  : [];

type HasTail<T extends any[]> = T extends [] | [any] ? false : true;

type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

type Last<T extends any[]> = {
  0: Last<Tail<T>>;
  1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];

type LastTest<T extends number> = { 0: "Test0"; 1: "Test1"; 2: "Test2" }[T];

type test = Last<[1, 2, 3, "jaj"]>;
type test1 = LastTest<0>;

// Extract a property’s type from an object
type ObjectInfer<O> = O extends { a: infer A } ? A : never;

const object = { a: "hello" };

type test32 = ObjectInfer<typeof object>;

// Extract inner types from function types
type FunctionInfer<F> = F extends (...args: infer A) => infer R
  ? [A, R]
  : never;

const fn001 = (a: number, b: any) => true;

type test33 = FunctionInfer<typeof fn001>;

// Extract generic types from a class or an interface
type ClassInfer<I> = I extends Promise<infer G> ? G : never;

const promise = new Promise<string>(() => {});

type test34 = ClassInfer<typeof promise>;

// Extract types from an array
type ArrayInfer<T> = T extends (infer U)[] ? U : never;

const array = [0, "data", 1, "data"];

type test35 = ArrayInfer<typeof array>;

// Extract types from a tuple
type TupleInfer<T> = T extends [infer A, ...(infer B)[]] ? [A, B] : never;

type test36 = TupleInfer<[string, number, boolean]>;

type CurryV0<P extends any[], R> = (
  arg0: Head<P>
) => HasTail<P> extends true ? CurryV0<Tail<P>, R> : R;

declare function curryV0<P extends any[], R>(
  f: (...args: P) => R
): CurryV0<P, R>;

const curried02 = curryV0(fn00);
const test61 = curried02("Jane")(26)(true);

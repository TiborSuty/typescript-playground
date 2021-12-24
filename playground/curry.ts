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

type Length<T extends any[]> = T["length"];

type test40 = Length<[]>;
type test41 = Length<[any, any]>;
type test42 = Length<[any, any, any]>;

type Prepend<E, T extends any[]> = ((head: E, ...args: T) => any) extends (
  ...args: infer U
) => any
  ? U
  : T;

type test43 = Prepend<string, []>;
type test44 = Prepend<string, [1, 2]>;

type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<any, I>>;
  1: T;
}[Length<I> extends N ? 1 : 0];

type test49 = Drop<2, [0, 1, 2, 3]>;
type test50 = Drop<Length<test49>, [0]>;

type CurryV0<P extends any[], R> = (
  arg0: Head<P>
) => HasTail<P> extends true ? CurryV0<Tail<P>, R> : R;

declare function curryV0<P extends any[], R>(
  f: (...args: P) => R
): CurryV0<P, R>;

const curried02 = curryV0(fn00);
const test61 = curried02("Jane")(26)(true);

type CurryV1<P extends any[], R> = (
  arg0: Head<P>,
  ...rest: Tail<Partial<P>>
) => HasTail<P> extends true ? CurryV1<Tail<P>, R> : R;

declare function curryV1<P extends any[], R>(
  f: (...args: P) => R
): CurryV1<P, R>;

const toCurr07 = (name: string, age: number, ...nicknames: string[]) => true;
const curried07 = curryV1(toCurr07);
const test27 = curried07("Jane", 26, "JJ", "Jini");

type CurryV2<P extends any[], R> = <T extends any[]>(
  ...args: T
) => HasTail<P> extends true ? CurryV2<Tail<T>, R> : R;
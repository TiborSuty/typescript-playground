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

type LastTest<T extends string> = { 0: "Test0"; 1: "Test1"; 2: "Test2" }[T];

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

type Cast<X, Y> = X extends Y ? X : Y;

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

const toCurry07 = (name: string, age: number, ...nicknames: string[]) => true;
const curried07 = curryV1(toCurry07);
const test27 = curried07("Jane", 26, "JJ", "Jini");

type CurryV2<P extends any[], R> = <T extends any[]>(
  ...args: T
) => HasTail<P> extends true ? CurryV2<Tail<T>, R> : R;

type CurryV5<P extends any[], R> = <T extends any[]>(
  ...args: Cast<T, Partial<P>>
) => Drop<Length<T>, P> extends [any, ...any[]]
  ? // @ts-expect-error, Excessive stack depth comparing types
    CurryV5<Cast<Drop<Length<T>, P>, any[]>, R>
  : R;

declare function curryV5<P extends any[], R>(
  f: (...args: P) => R
): CurryV5<P, R>;

const toCurry09 = (
  name: string,
  age: number,
  single: boolean,
  ...nicknames: string[]
) => true;
const curried10 = curryV5(toCurry09);

const test67 = curried10("Jane", 26)(true, "JJ", "Jini");
const test68 = curried10("Jane")(26, true, "JJ", "Jini");

type Pos<I extends any[]> = Length<I>;
type Next<I extends any[]> = Prepend<any, I>;
type Prev<I extends any[]> = Tail<I>;

type iterator = [any, any];
type test70 = Pos<iterator>;
type test71 = Pos<Next<iterator>>;
type test72 = Pos<Prev<iterator>>;

type CustomIterator<
  Index extends number = 0,
  From extends any[] = [],
  I extends any[] = []
> = {
  0: CustomIterator<Index, Next<From>, Next<I>>;
  1: From;
}[Pos<I> extends Index ? 1 : 0];

type test73 = CustomIterator<2>;
type test74 = CustomIterator<3, test73>;
type test75 = Pos<test73>;
type test76 = Pos<test74>;

type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
  0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>;
  1: R;
}[Pos<I> extends Length<T> ? 1 : 0];

type test77 = Reverse<[1, 2, 3]>;
type test78 = Reverse<test77>;
type test79 = Reverse<[2, 1], [3, 4]>;

type Concat<T1 extends any[], T2 extends any[]> = Reverse<
  Cast<Reverse<T1>, any[]>,
  T2
>;

type test80 = Concat<[1, 2], [3, 4]>;

type Append<E, T extends any[]> = Concat<T, [E]>;

type test81 = Append<3, [1, 2]>;

type GapOf<
  T1 extends any[],
  T2 extends any[],
  TN extends any[],
  I extends any[]
> = T1[Pos<I>] extends under ? Append<T2[Pos<I>], TN> : TN;

type test82 = GapOf<[under, under], [number, string], [], CustomIterator<0>>;
type test83 = GapOf<[under, under], [number, string], [], CustomIterator<1>>;

type under = __;

type GapsOf<
  T1 extends any[],
  T2 extends any[],
  TN extends any[] = [],
  I extends any[] = []
> = {
  0: GapsOf<T1, T2, Cast<GapOf<T1, T2, TN, I>, any[]>, Next<I>>;
  1: Concat<TN, Cast<Drop<Pos<I>, T2>, any[]>>;
}[Pos<I> extends Length<T1> ? 1 : 0];

type test84 = GapsOf<[under, any, under], [number, string, object, string[]]>
type test85 = GapsOf<[any, under, any], [number, string, object, string[]]>

type PartialGaps<T extends any[]> = {
  [K in keyof T]?: T[K] | under
}

type test87 = PartialGaps<[number, string]>



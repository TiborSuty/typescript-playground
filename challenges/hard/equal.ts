// https://github.com/microsoft/TypeScript/issues/27024

/**
 * The only problem is that any is "equal to" everything, except never.
 */
export type Equals2<T, S> = [T] extends [S]
  ? [S] extends [T]
    ? true
    : false
  : false;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

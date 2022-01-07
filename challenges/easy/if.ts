// Assignment: Implement a utils If which accepts condition C, a truthy return type T,
// and a falsy return type F. C is expected to be either true or false while T and F can
// be any type.

// Solution
type CustomIf<T extends boolean, K, N> = T extends true ? K : N;

// Test
type CustomIfTest = CustomIf<true, "a", "b">;
type CustomIfTest2 = CustomIf<false, "a", "b">;

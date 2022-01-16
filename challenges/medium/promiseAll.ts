// https://github.com/type-challenges/type-challenges/blob/master/questions/20-medium-promise-all/README.md
// Assignment: Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

// Solution
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer K> ? K : T[K];
}>;

// Test
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const p = Promise.all([promise1, promise2, promise3] as const);

// Assignment: In this challenge, you need to type an object or a class - whatever you like -
// to provide two function option(key, value) and get(). In option, you can extend the current
// config type by the given key and value. We should about to access the final result via get.

// Solution
type CustomChainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): CustomChainable<T & { [key in K]: V }>;
  get(): T;
};

// Test
declare const config: CustomChainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

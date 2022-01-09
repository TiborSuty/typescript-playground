// Assignment: Implement the built-in Readonly<T> generic without using it.

// Solution
type CustomReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Test
interface Todo {
  title: string;
  description: string;
}

type CustomReadonlyTest = CustomReadonly<Todo>;

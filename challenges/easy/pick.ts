// Assignment: Implement the built-in Pick<T, K> generic without using it.

// Solution
type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Test
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type CustomPickTest = CustomPick<Todo, "title">;

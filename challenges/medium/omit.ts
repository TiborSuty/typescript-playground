// Assignment: Implement the built-in Omit<T, K> generic without using it.

// Solution
type CustomOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// Test
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type CustomOmitTest = CustomOmit<Todo, "description" | "title">;

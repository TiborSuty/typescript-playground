// Assignment: Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly.
// When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// Solution
type CustomReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
};

// Test
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type CustomReadonly2Test = CustomReadonly2<Todo, "title" | "description">;

// Assignment: Implement the generic version of Array.push

// Solution
type CustomPush<T, K extends any[]> = [T, ...K];

// Test
type CustomPushTest = CustomPush<1, [2, 3]>;

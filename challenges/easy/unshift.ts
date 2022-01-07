// Assignment: Implement the type version of Array.unshift

// Solution
type CustomUnshift<T extends any[], K> = [K, ...T];

// Test
type CustomUnshiftTest = CustomUnshift<[2, 3], 1>;

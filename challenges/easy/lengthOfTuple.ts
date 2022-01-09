// Assignment: For given a tuple, you need create a generic Length, pick the length of the tuple

// Solution
type CustomLength<T extends any[]> = T["length"];

// Test
type CustomLengthTest = CustomLength<
  ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"]
>;

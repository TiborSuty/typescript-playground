// Assignment: Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

// Solution
type CustomAbsolute<T extends number | string | bigint> =
  `${T}` extends `-${infer R}` ? R : `${T}`;

// Test
type CustomAbsoluteTest = CustomAbsolute<-15>;

// https://github.com/type-challenges/type-challenges/blob/master/questions/119-medium-replaceall/README.md
// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// Solution
type CustomReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer T}`
  ? `${F}${To}${CustomReplaceAll<T, From, To>}`
  : S;

//  Test
type CustomReplaceAllTest = CustomReplaceAll<"t y p e s", " ", "">;

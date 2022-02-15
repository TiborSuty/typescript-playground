// Assignment: Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.
// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.

// Solution
type Prefix = "+" | "-";
type PercentageParser<A extends string> = A extends `${infer F}${infer R}`
  ? F extends Prefix
    ? R extends `${infer B}%`
      ? [F, B, "%"]
      : [F, R, ""]
    : A extends `${infer B}%`
    ? ["", B, "%"]
    : ["", R, ""]
  : ["", "", ""];

// Test
type PString2 = "+85%";
type PercentageParserTest = PercentageParser<PString2>;

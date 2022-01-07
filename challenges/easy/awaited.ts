// Assignment: IIf we have a type which is wrapped type like Promise.
// How we can get a type which is inside the wrapped type?
// For example if we have Promise<ExampleType> how to get ExampleType?

// Solution
type CustomAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? CustomAwaited<P>
    : P
  : any;

type CustomAwaitedTest = CustomAwaited<Promise<Promise<"test">>>;

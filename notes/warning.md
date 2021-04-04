- Don't always jump to **non-null assertion**, be extra careful, truthiness check is also a valid alternative

- When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

- The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.

- Also, the overload signature must be compatible with its implementation signature

- Always prefer parameters with union types instead of overloads when possible

- object is not Object. Always use object!

If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on.

Interesting things that make type annotations unnecessay

- Type Inference
- Contextualy typing

> `Type aliases` are great as they allow you to resuse types or name a union type as you want e.g

```
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {}
function destroyCoord(pt: Point) {}

type ID = number | string;
```

Types aliases and Interfaces are the same things in many ways except few

- Interface can be extended with `extends` WHILE type can only be extended via **intersection**
- You can add new field to an exisiting interface by redefining it but not for type alias

I love `type assertions`, they always come in handy

> Literal types seem to be of no value until you turned it into union type (with other (non)literals ) 🚀

WTH is `as const`

Tsc **narrowing** with **typeguard** is absolutely fascinating on how it tracks varibale types

> There are a couple of different constructs TypeScript understands for narrowing.

- (typeof) type guards
- Truthiness narrowing
- Equality narrowing
- instanceof narrowing
- Assignments
- Control Flow Analysis
- Type Predicates (I do not understand this yet)
- Discriminated unions

  ```
  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Square {
    kind: "square";
    sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
  //                     ^ = (parameter) shape: Circle
      case "square":
        return shape.sideLength ** 2;
  //           ^ = (parameter) shape: Square
    }
  }
  ```

- The `Never` Type
- Exhaustiveness checking

- **Function Overloading** concept is crazily interesting
- The special type object refers to any value that isn’t a primitive (string, number, boolean, symbol, null, or undefined). This is different from the empty object type `{}`, and also different from the global type `Object`. It’s very likely you will never use `Object`.
- The `unknown` type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an `unknown` value:
- Some functions never return a value:

  ```
  function fail(msg: string): never {
    throw new Error(msg);
  }
  ```

- `as const` sometimes come in handy
- `readonly` is a very awesome way to indicate a constant field in an object
- `Array<string>` is just a shorthand for `string[]`

  > Hence, arrays are generic

- There is readOnlyArray also `ReadonlyArray<Type>` or `readonly Type[]` which implies the array itself is immutable

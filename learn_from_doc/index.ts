import start from "./start";

start();
console.log("hey, you are in index file");

function printName(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase()); //   ? : check if it is not undefined hence take it as void 0
}

function liveDangerously(x?: number | undefined) {
  console.log(x!.toFixed()); //  ! : non-null assertion operator (postfix!)
}

/**
 * == and !=
 * If you’re unfamiliar, checking whether something == null actually not only checks
 * whether it is specifically the value null - it also checks whether it’s potentially undefined.
 * The same applies to == undefined: it checks whether a value is either null or undefined.
 */

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) container.value *= factor;
}

// array.map(array,callback)

function map<Input, Output>(
  arr: Input[],
  fn: (arg: Input) => Output
): Output[] {
  return arr.map(fn);
}

// as const

const args = [8, 5] as const;
const angle = Math.atan2(...args);

// generic types

type Objec<Type> = {
  content: Type | Type[];
};

let anObj: Objec<string> = {
  content: "ade",
};

anObj = {
  content: ["ade", "yakubu"],
};

// class

class Maths {
  radius: number;
  length: number;
  width: number;
  constructor(radius: number, length: number, width: number) {
    this.radius = radius;
    this.length = length;
    this.width = width;
  }

  addition(l: number, w: number) {
    return l + w;
  }
}

const math = new Maths(4, 3, 2);
const add = math.addition(3, 2);
console.log(add);

// namespace import

import * as maths from "./start/math";

console.log(maths.pi);
const positivePhi = maths.absolute(maths.phi);

// types import

import type { Book } from "./start/types";

const book: Book = {
  available: true,
  color: "yellow",
  pages: 10,
  price: 200,
};

console.log(book, [1, 23]);

//==========

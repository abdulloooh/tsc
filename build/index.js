"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = __importDefault(require("./start"));
start_1.default();
console.log("hey, you are in index file");
function printName(obj) {
  var _a;
  console.log(
    (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()
  ); //   ? : check if it is not undefined hence take it as void 0
}
function liveDangerously(x) {
  console.log(x.toFixed()); //  ! : non-null assertion operator (postfix!)
}
function multiplyValue(container, factor) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) container.value *= factor;
}
// array.map(array,callback)
function map(arr, fn) {
  return arr.map(fn);
}
function makeDate(mOrTimestamp, d, y) {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(1, 3);
const d3 = makeDate(5, 5, 5);
console.log({ d1, d2, d3 });

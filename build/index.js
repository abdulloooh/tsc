"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = __importDefault(require("./start"));
start_1.default();
console.log("hey, you are in index file");
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()); //   ? : check if it is not undefined hence take it as void 0
}
function liveDangerously(x) {
    console.log(x.toFixed()); //  ! : non-null assertion operator (postfix!)
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null)
        container.value *= factor;
}
// array.map(array,callback)
function map(arr, fn) {
    return arr.map(fn);
}
// as const
const args = [8, 5];
const angle = Math.atan2(...args);
let anObj = {
    content: "ade",
};
anObj = {
    content: ["ade", "yakubu"],
};
//==========
const newArr = ["ade", 3];
newArr.pop();
newArr.push("yaku");
console.log(newArr);

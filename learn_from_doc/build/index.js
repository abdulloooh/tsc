"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// class
class Maths {
    constructor(radius, length, width) {
        this.radius = radius;
        this.length = length;
        this.width = width;
    }
    addition(l, w) {
        return l + w;
    }
}
const math = new Maths(4, 3, 2);
const add = math.addition(3, 2);
console.log(add);
// namespace import
const maths = __importStar(require("./start/math"));
console.log(maths.pi);
const positivePhi = maths.absolute(maths.phi);
const book = {
    available: true,
    color: "yellow",
    pages: 10,
    price: 200,
};
console.log(book, [1, 23]);
//==========

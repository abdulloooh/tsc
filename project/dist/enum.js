"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports._Config = void 0;
require("dotenv").config();
var _Config;
(function (_Config) {
})(_Config = exports._Config || (exports._Config = {}));
//   mongodb = process.env.MONGO_URI!,
/**
 * Only numeric enums can have computed members, but this expression has type 'string'.
 * If you do not need exhaustiveness checks, consider using an object literal instead
 *
 * So, I am sticking with object literal
 */
exports.Config = {
    mongodb: process.env.MONGO_URI,
    port: 3000,
};

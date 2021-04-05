require("dotenv").config();
export enum _Config {}
//   mongodb = process.env.MONGO_URI!,

/**
 * Only numeric enums can have computed members, but this expression has type 'string'.
 * If you do not need exhaustiveness checks, consider using an object literal instead
 *
 * So, I am sticking with object literal
 */

export const Config = {
  mongodb: process.env.MONGO_URI,
  port: 3000,
};

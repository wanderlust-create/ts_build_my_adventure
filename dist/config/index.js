"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const utils_1 = require("./utils");
// Set the default NODE_ENV to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || "development";
// load .env File
const envFound = dotenv.config();
if (!envFound) {
    throw new Error("⚠️Could not find .env file⚠️");
}
const findPORT = function () {
    let port;
    const portEnv = process.env.PORT, portArg = process.argv[2];
    // first look for port num in .env file
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    // then look for a comand line arg
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 8080;
    }
    return port;
};
// Define port number
const port = findPORT();
exports.default = {
    PORT: port,
    NODE_ENV: process.env.NODE_ENV,
};
//# sourceMappingURL=index.js.map
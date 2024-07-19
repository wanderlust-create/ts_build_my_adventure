import * as dotenv from "dotenv";
import { isInteger } from "./utils";

// Set the default NODE_ENV to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// load .env File
const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️Could not find .env file⚠️");
}

const findPORT = function () {
  let port: number;
  const portEnv = process.env.PORT,
    portArg = process.argv[2]
    // first look for port num in .env file
  if (isInteger(portEnv)) {
    port = parseInt(portEnv);
  }
  // then look for a comand line arg
  if (!port && isInteger(portArg)) {
    port = parseInt(portArg);
  }
  if (!port) {
    port = 8080;
  }
  return port;
};

// Define port number
const port = findPORT();

export default {
  PORT: port,
  NODE_ENV: process.env.NODE_ENV,
};

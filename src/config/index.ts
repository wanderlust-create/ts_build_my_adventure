import { isInteger } from "./utils";


const findPORT = function() {
  let port: number;
  const portArg = process.env.PORT;
  if (isInteger(portArg)) {
    port = parseInt(portArg)
  }
  if(!port) {
    port = 8080
  }
  return port
}

// Define port number
const port = findPORT();

export default {
  PORT: port
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const findPORT = function () {
    let port;
    const portArg = process.env.PORT;
    if ((0, utils_1.isInteger)(portArg)) {
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
    PORT: port
};
//# sourceMappingURL=index.js.map
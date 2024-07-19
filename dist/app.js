"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = require("./routes/root");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const port = config_1.default.PORT;
function setupExpress() {
    app.route("/").get(root_1.root);
}
function startServer() {
    app.listen(9000, () => {
        console.log(`🎆 🚕 ✈️  Build My Adventuure REST API listening at http://localhost:${config_1.default.PORT} ✈️ 🚕 🎆`);
    });
}
setupExpress();
startServer();
//# sourceMappingURL=app.js.map
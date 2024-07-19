import express from "express";
import { root } from "./routes/root";
import config from "./config";

const app = express();
const port = config.PORT;

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  app.listen(9000, () => {
    console.log(
      `🎆 🚕 ✈️  Build My Adventuure REST API listening at http://localhost:${config.PORT} ✈️ 🚕 🎆`
    );
  });
}

setupExpress();

startServer();

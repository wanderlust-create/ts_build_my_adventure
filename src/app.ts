import express from "express";
import { root } from "./routes/root";
import config from "./config";
import logger from "./loaders/logger"

const app = express();
const port = config.PORT;

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  app.listen(port, () => {
    logger.info(
      `🎆 🚕 ✈️  Build My Adventuure REST API listening at http://localhost:${config.PORT} ✈️ 🚕 🎆`
    );
  });
}

setupExpress();

startServer();

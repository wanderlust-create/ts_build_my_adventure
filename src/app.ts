import createServer from "./loaders/server";
import config from "./config";
import logger from "./loaders/logger";
import dbSetup from "./loaders/dbSetup";

const port = config.PORT;

const app = createServer();

app.listen(port, async () => {
  logger.info(
    `🎆 🚕 ✈️  Build My Adventuure REST API listening at http://localhost:${config.PORT} ✈️ 🚕 🎆`
  );
  dbSetup();
  logger.info("Database is connected");
});

export default app;

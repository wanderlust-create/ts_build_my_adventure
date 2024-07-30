import { Model } from "objection";
import express from "express";

// Load HTTP request logger
import morgan from "morgan";

// Import Routes
import api from "../api";

// Db connection
import connection from "../loaders/dbSetup";

function createServer() {
  const app = express();
  Model.knex(connection);
  app.use(express.json());
  app.use(morgan("combined"));
  app.use("/", api);
  return app;
}

export default createServer;

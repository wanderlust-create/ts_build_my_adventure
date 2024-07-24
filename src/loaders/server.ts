import { Model } from "objection";
import express from "express";

// Db connection
import connection from "../loaders/dbSetup";


function createServer() {
  const app = express();
  Model.knex(connection);
  app.use(express.json());
  return app;
}

export default createServer;

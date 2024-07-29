import { NextFunction, Request, Response, Router } from "express";
import CityController from "../../controllers/city";

const route = Router();

export default (app: Router) => {
  app.use("/cities", route);
  route.get("/", CityController.listAllCities);
  route.get("/:id", CityController.getCityById);
  route.post("/", CityController.createCity);
  route.patch("/:id", CityController.updateCityById);
};

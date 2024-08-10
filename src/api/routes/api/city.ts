import { NextFunction, Request, Response, Router } from "express";
import CityController from "../../controllers/city";

// Error Handler
import validateDto from "../../middlewear/validate-dto";
import cityDto from "../../reqBodyValidation/dtos/city";

const route = Router();

export default (app: Router) => {
  app.use("/cities", route);
  route.get("/", CityController.listAllCities);
  route.get("/:id", CityController.getCityById);
  route.post("/", validateDto(cityDto.data), CityController.createCity);
  route.patch("/:id", CityController.updateCityById);
  route.delete("/:id", CityController.deleteCityById);
};

import { NextFunction, Request, Response, Router } from "express";
import UserCityController from "../../controllers/userCity";

// Error Handler
import validateDto from "../../middlewear/validate-dto";
import userCityDto from "../../reqBodyValidation/dtos/userCity";

const route = Router();

export default (app: Router) => {
  app.use("/user-cities", route);
  route.get("/", UserCityController.listAllUserCities);
  route.post("/", validateDto(userCityDto.data), UserCityController.createUserCity);
  route.delete("/:id", UserCityController.deleteUserCityById);
};

import { NextFunction, Request, Response, Router } from "express";
import UserCityController from "../../controllers/userCity";

const route = Router();

export default (app: Router) => {
  app.use("/user-cities", route);
  route.get("/", UserCityController.listAllUserCities);
  route.post("/", UserCityController.createUserCity);
  route.delete("/:id", UserCityController.deleteUserCityById);
};

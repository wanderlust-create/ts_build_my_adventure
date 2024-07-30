import { NextFunction, Request, Response, Router } from "express";
import UserController from "../../controllers/user";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);
  route.get("/", UserController.listAllUsers);
  route.get("/:id", UserController.getUserById);
  route.post("/", UserController.createUser);
  route.patch("/:id", UserController.updateUserById);
  route.delete("/:id", UserController.deleteUserById);
};

import { NextFunction, Request, Response, Router } from "express";
import UserController from "../../controllers/user";

// Error Handler
import validateDto from "../../middlewear/validate-dto";
import userDto from "../../reqBodyValidation/dtos/user";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);
  route.get("/", UserController.listAllUsers);
  route.get("/:id", UserController.getUserById);
  route.post(
    "/",
    validateDto(userDto.userPostDto.data),
    UserController.createUser
  );
  route.patch(
    "/:id",
    validateDto(userDto.userPatchDto.data),
    UserController.updateUserById
  );
  route.delete("/:id", UserController.deleteUserById);
};

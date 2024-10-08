import * as express from "express";
import logger from "../../loaders/logger";
import User from "../models/user";
import UserService from "../services/user";

export default {
  listAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
async function listAllUsers(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET All CONTROLLER - users/ endpoint.`);
  try {
    const users = await UserService.listAllUsers();
    if (users.statusCode) {
      res.status(users.statusCode).json({ error: users.type });
      return;
    } else {
      res.json(users);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function getUserById(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET BY ID CONTROLLER - users/:id endpoint.`);
  try {
    const user = await UserService.getUserById(req.params.id);
    if (user.statusCode) {
      res.status(user.statusCode).json({ error: user.type });
      return;
    } else {
      res.json(user);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function createUser(req: express.Request, res: express.Response) {
  logger.debug(`Entering CREATE CONTROLLER - users/ endpoint.`);
  try {
    const newUser = await UserService.createUser(req.body);
    if (newUser.statusCode) {
      res.status(newUser.statusCode).json({ error: newUser.type });
      return;
    } else {
      res.json(newUser);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function updateUserById(req: express.Request, res: express.Response) {
  logger.debug(`Entering UPDATE BY ID CONTROLLER - users/:id endpoint.`);
  try {
    const updatedUser = await UserService.updateUserById(
      req.params.id,
      req.body
    );
    if (updatedUser.statusCode) {
      res.status(updatedUser.statusCode).json({ error: updatedUser.type });
      return;
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function deleteUserById(req: express.Request, res: express.Response) {
  logger.debug(`Entering DELETE BY ID CONTROLLER - users/:id endpoint.`);
  try {
    const deletedUser = await UserService.deleteUserById(req.params.id);
    if (deletedUser.statusCode) {
      res.status(deletedUser.statusCode).json({ error: deletedUser.type });
      return;
    } else {
      logger.info("User Deleted:", deletedUser);
      res.json({ alert: "User Deleted", deletedUser });
    }
  } catch (err) {
    logger.error(err);
    res.status(500).json(err);
  }
}

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
  const newUser = await UserService.createUser(req.body);
  try {
    if (newUser === undefined) {
      res.status(404).json({ error: "User not created" });
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
  const id = req.params.id;
  const updatedUser = await UserService.updateUserById(id, req.body);
  try {
    if (!updatedUser) {
      res.status(404).json({ error: "User not updated" });
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
    const id = req.params.id;
    const deletedUser = await UserService.deleteUserById(id);
    if (deletedUser.length === 0) {
      res.status(404).json({ error: "User not deleted" });
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

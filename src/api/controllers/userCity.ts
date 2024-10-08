import * as express from "express";
import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import UserCityService from "../services/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};
async function listAllUserCities(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET All CONTROLLER - user-cities/ endpoint.`);
  try {
    const userCities = await UserCityService.listAllUserCities();
    if (userCities.statusCode) {
      res.status(userCities.statusCode).json({ error: userCities.type });
      return;
    } else {
      res.json(userCities);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function createUserCity(req: express.Request, res: express.Response) {
  logger.debug(`Entering CREATE CONTROLLER - user-cities/ endpoint.`);
  try {
    const newUserCity = await UserCityService.createUserCity(req.body);
    if (newUserCity.statusCode) {
      res.status(newUserCity.statusCode).json({ error: newUserCity.type });
      return;
      // foreign key not found
    } else if (newUserCity.nativeError) {
      res.status(400).json({ error: newUserCity.nativeError.detail });
    } else {
      res.json(newUserCity);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function deleteUserCityById(req: express.Request, res: express.Response) {
  logger.debug(`Entering DELETE BY ID CONTROLLER - user-cities/:id endpoint.`);
  try {
    const id = req.params.id;
    const deletedUserCity = await UserCityService.deleteUserCityById(id);
    if (deletedUserCity.statusCode) {
      res
        .status(deletedUserCity.statusCode)
        .json({ error: deletedUserCity.type });
      return;
    } else {
      logger.info("UserCity Deleted:", deletedUserCity);
      res.json({ alert: "UserCity Deleted", deletedUserCity });
    }
  } catch (err) {
    logger.error(err);
    res.status(500).json(err);
  }
}

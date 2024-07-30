import * as express from "express";
import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import UserCityService from "../services/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};

async function listAllUserCities(
  req: express.Request,
  res: express.Response
): Promise<UserCity[]> {
  logger.debug(`Entering GET All CONTROLLER - userCities/ endpoint.`);
  const userCities = await UserCityService.listAllUserCities();
  try {
    if (!userCities) {
      res.status(404).json({ error: "No userCities found" });
      return;
    } else {
      res.json(userCities);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}


async function createUserCity(
  req: express.Request,
  res: express.Response
): Promise<UserCity> {
  logger.debug(`Entering CREATE CONTROLLER - userCities/ endpoint.`);
  const newUserCity = await UserCityService.createUserCity(req.body);
  try {
    if (newUserCity === undefined) {
      res.status(404).json({ error: "userCity not created" });
      return;
    } else {
      res.json(newUserCity);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}


async function deleteUserCityById(
  req: express.Request,
  res: express.Response
): Promise<UserCity> {
  logger.debug(`Entering DELETE BY ID CONTROLLER - userCities/:id endpoint.`);
  try {
    const id = req.params.id;
    const deletedUserCity = await UserCityService.deleteUserCityById(id);
    if (deletedUserCity.length === 0) {
      res.status(404).json({ error: "userCity not found" });
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

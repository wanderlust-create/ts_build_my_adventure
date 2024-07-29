import * as express from "express";
import logger from "../../loaders/logger"
import CityService from "../services/city"

export default {
  listAllCities,
  // getCityById,
  // createCity,
  // updateCityById,
  // deleteCityById,
};

async function listAllCities(
  req: express.Request,
  res: express.Response
): Promise<void> {
  logger.debug(`Entering GET All CONTROLLER - cities/ endpoint.`);
  console.log(`Entering GET All CONTROLLER - cities/ endpoint.`);
  const cities = await CityService.listAllCities();
  try {
    if (!cities) {
      res.status(404).json({error: "No cities found"});
      return;
    } else {
      res.json(cities);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err)
  }
}
import * as express from "express";
import logger from "../../loaders/logger";
import CityService from "../services/city";

export default {
  listAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
};

async function listAllCities(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET All CONTROLLER - cities/ endpoint.`);
  const cities = await CityService.listAllCities();
  try {
    if (!cities) {
      res.status(404).json({ error: "No cities found" });
      return;
    } else {
      res.json(cities);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function getCityById(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET BY ID CONTROLLER - cities/:id endpoint.`);
  try {
    const city = await CityService.getCityById(req.params.id);
    if (city.statusCode != 200) {
      res.status(city.statusCode).json({ error: city.type });
      return;
    } else {
      res.json(city);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function createCity(req: express.Request, res: express.Response) {
  logger.debug(`Entering CREATE CONTROLLER - cities/ endpoint.`);
  try {
    const newCity = await CityService.createCity(req.body);
    if (!newCity) {
      res.status(404).json({ error: "City not created" });
      return;
    } else {
      res.json(newCity);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function updateCityById(req: express.Request, res: express.Response) {
  logger.debug(`Entering UPDATE BY ID CONTROLLER - cities/:id endpoint.`);
  const id = req.params.id;
  try {
    const updatedCity = await CityService.updateCityById(id, req.body);
    console.log(updatedCity)
    if (updatedCity.statusCode != 200) {
      res.status(updatedCity.statusCode).json({ error: updatedCity.type });
      return;
    } else {
      res.json(updatedCity);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function deleteCityById(req: express.Request, res: express.Response) {
  logger.debug(`Entering DELETE BY ID CONTROLLER - cities/:id endpoint.`);
  try {
    const id = req.params.id;
    const deletedCity = await CityService.deleteCityById(id);
    if (deletedCity.statusCode != 200) {
      res.status(deletedCity.statusCode).json({ error: deletedCity.type });
      return;
    } else {
      logger.info("City Deleted:", deletedCity);
      res.json({ alert: "City Deleted", deletedCity });
    }
  } catch (err) {
    logger.error(err);
    res.status(500).json(err);
  }
}

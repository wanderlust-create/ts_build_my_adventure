import logger from "../../loaders/logger";
import City from "../models/city";
import cityDao from "../daos/city";

export default {
  listAllCities,
  getCityById,
  // createCity,
  // updateCityById,
  // deleteCityById,
};

function listAllCities() {
  logger.debug(`Entering GET All SERVICES - cities/ endpoint.`);
  return cityDao.listAllCities();
}

function getCityById(cityId: string) {
  logger.debug(`Entering GET BY ID SERVICES - city/:id endpoint ${cityId}.`);
  return cityDao.getCityById(cityId);
}

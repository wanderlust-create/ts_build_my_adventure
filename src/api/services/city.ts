import logger from "../../loaders/logger";
import City from "../models/city";
import cityDao from "../daos/city";

export default {
  listAllCities,
  getCityById,
  createCity,
  // updateCityById,
  // deleteCityById,
};

function listAllCities() {
  logger.debug(`Entering GET All SERVICES - cities/ endpoint.`);
  return cityDao.listAllCities();
}

function getCityById(cityId: string) {
  logger.debug(`Entering GET BY ID SERVICES - cities/:id endpoint ${cityId}.`);
  return cityDao.getCityById(cityId);
}
function createCity(cityDto: City) {
  logger.debug(`Entering CREATE SERVICES - cities/ endpoint ${cityDto}`);
  return cityDao.createCity(cityDto);
}

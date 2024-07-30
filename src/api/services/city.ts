import logger from "../../loaders/logger";
import City from "../models/city";
import cityDao from "../daos/city";

export default {
  listAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
};

function listAllCities() {
  logger.debug(`Entering GET All SERVICES - cities/ endpoint.`);
  return cityDao.listAllCities();
}
function getCityById(cityId: string) {
  logger.debug(`Entering GET BY ID SERVICES - cities/:id endpoint ${cityId}.`);
  return cityDao.getCityById(cityId);
}
function createCity(cityData: City) {
  logger.debug(`Entering CREATE SERVICES - cities/ endpoint ${cityData}`);
  return cityDao.createCity(cityData);
}
function updateCityById(cityId: string, cityData: City) {
  logger.debug(`Entering UPDATE BY ID SERVICES - cities/:id ${cityData}`);
  return cityDao.updateCityById(cityId, cityData);
}
function deleteCityById(cityId: string) {
  logger.debug(`Entering DELETE BY ID SERVICES - cities/:id`);
  return cityDao.deleteCityById(cityId);
}
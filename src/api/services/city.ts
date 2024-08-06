import logger from "../../loaders/logger";
import City from "../models/city";
import CityDao from "../daos/city";

export default {
  listAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
};

function listAllCities() {
  logger.debug(`Entering GET All SERVICE - cities/ endpoint.`);
  return CityDao.listAllCities();
}
function getCityById(cityId: string) {
  logger.debug(`Entering GET BY ID SERVICE - cities/:id endpoint ${cityId}.`);
  return CityDao.getCityById(cityId);
}
function createCity(cityData: City) {
  logger.debug(`Entering CREATE SERVICE - cities/ endpoint ${cityData}`);
  return CityDao.createCity(cityData);
}
function updateCityById(cityId: string, cityData: City) {
  logger.debug(`Entering UPDATE BY ID SERVICE - cities/:id ${cityData}`);
  return CityDao.updateCityById(cityId, cityData);
}
function deleteCityById(cityId: string) {
  logger.debug(`Entering DELETE BY ID SERVICE - cities/:id`);
  return CityDao.deleteCityById(cityId);
}

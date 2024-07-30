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

function listAllCities(): Promise<City[]> {
  logger.debug(`Entering GET All SERVICES - cities/ endpoint.`);
  return CityDao.listAllCities();
}
function getCityById(cityId: string): Promise<City> {
  logger.debug(`Entering GET BY ID SERVICES - cities/:id endpoint ${cityId}.`);
  return CityDao.getCityById(cityId);
}
function createCity(cityData: City): Promise<City> {
  logger.debug(`Entering CREATE SERVICES - cities/ endpoint ${cityData}`);
  return CityDao.createCity(cityData);
}
function updateCityById(cityId: string, cityData: City): Promise<City[]> {
  logger.debug(`Entering UPDATE BY ID SERVICES - cities/:id ${cityData}`);
  return CityDao.updateCityById(cityId, cityData);
}
function deleteCityById(cityId: string): Promise<City[]> {
  logger.debug(`Entering DELETE BY ID SERVICES - cities/:id`);
  return CityDao.deleteCityById(cityId);
}

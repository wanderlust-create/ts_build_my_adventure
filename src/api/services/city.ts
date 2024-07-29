import logger from "../../loaders/logger";
import City from "../models/city";
import cityDao from "../daos/city";

export default {
  listAllCities,
  // getCityById,
  // createCity,
  // updateCityById,
  // deleteCityById,
};

function listAllCities() {
  logger.debug(`Entering GET All SERVICES - cities/ endpoint.`);
  return cityDao.listAllCities();
}

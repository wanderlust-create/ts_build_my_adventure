import logger from "../../loaders/logger";
import City from "../models/city";

export default {
  listAllCities,
  // getCityById,
  // createCity,
  // updateCityById,
  // deleteCityById,
};

async function listAllCities(): Promise<City[]> {
  logger.debug(`Entering GET ALL DAO- cities/ endpoint.`);
  return City.query()
    .column("id", "name", "country")
    .orderBy("created_at", "desc")
}

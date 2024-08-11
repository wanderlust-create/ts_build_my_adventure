import logger from "../../loaders/logger";
import City from "../models/city";
import { ValidationError, NotFoundError } from "objection";

export default {
  listAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
};

async function listAllCities() {
  logger.debug(`Entering GET ALL DAO- cities/ endpoint.`);
  return City.query()
    .column("id", "name", "country")
    .orderBy("created_at", "desc")
    .withGraphFetched("event");
}
async function getCityById(cityId: string) {
  logger.debug(`Entering GET BY ID DAO- cities/:id endpoint ${cityId}`);
  try {
    const city = await City.query()
      .findById(cityId)
      .column("id", "name", "country")
      .withGraphFetched("event");
    return city;
  } catch (err) {
    return err;
  }
}
async function createCity(cityData: City) {
  logger.debug(`Entering CREATE DAO- cities/ endpoint ${cityData}`);
  const newCity = await City.query().insert({
    name: cityData.name,
    country: cityData.country,
  });
  return newCity;
}
async function updateCityById(cityId: string, cityData: City) {
  logger.debug(`Entering UPDATE BY ID DAO- cities/:id endpoint ${cityData}`);
  try {
    const updatedCity = await City.query()
      .findById(cityId)
      .patch({
        name: cityData.name,
        country: cityData.country,
      })
      .returning("*");
    return updatedCity;
  } catch (err) {
    return err;
  }
}
async function deleteCityById(cityId: string) {
  logger.debug(`Entering DELETE BY ID DAO- cities/:id endpoint ${cityId}`);
  const deletedCity = await City.query()
    .delete()
    .where({ id: cityId })
    .returning("*");
  return deletedCity;
}

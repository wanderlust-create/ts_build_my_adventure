import logger from "../../loaders/logger";
import City from "../models/city";

export default {
  listAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
};

async function listAllCities(): Promise<City[]> {
  logger.debug(`Entering GET ALL DAO- cities/ endpoint.`);
  return City.query()
    .column("id", "name", "country")
    .orderBy("created_at", "desc");
  // .withGraphFetched("event");
}
async function getCityById(cityId: string): Promise<City> {
  logger.debug(`Entering GET BY ID DAO- cities/:id endpoint ${cityId}`);
  return City.query()
    .findById(cityId)
    .column("id", "name", "country")
    // .withGraphFetched("event");
}
async function createCity(cityData: City): Promise<City> {
  logger.debug(`Entering CREATE DAO- cities/ endpoint ${cityData}`);
  const newCity = await City.query().insert({
    name: cityData.name,
    country: cityData.country,
  })
  return newCity;
}
async function updateCityById(cityId: string, cityData: City) {
  logger.debug(`Entering UPDATE BY ID DAO- cities/:id endpoint ${cityData}`);
  const updatedCity = await City.query()
    .findById(cityId)
    .patch({
      name: cityData.name,
      country: cityData.country,
    })
    .returning("*");
  return updatedCity;
}
async function deleteCityById(cityId: string) {
  logger.debug(`Entering DELETE BY ID DAO- cities/ endpoint ${cityId}`);
  const deletedCity = await City.query()
    .delete()
    .where({ id: cityId })
    .returning("*");
  return deletedCity;
}

import City from "../models/city"
import cityDao from "../daos/city"

export default {
  listAllCities,
  // getCityById,
  // createCity,
  // updateCityById,
  // deleteCityById,
};

function listAllCities() {
  return cityDao.listAllCities()
}
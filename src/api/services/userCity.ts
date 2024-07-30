import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import UserCityDao from "../daos/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};

function listAllUserCities() {
  logger.debug(`Entering GET All SERVICES - userCities/ endpoint.`);
  return UserCityDao.listAllUserCities();
}
function createUserCity(userCityData: UserCity) {
  logger.debug(`Entering CREATE SERVICES - userCities/ endpoint ${userCityData}`);
  return UserCityDao.createUserCity(userCityData);
}
function deleteUserCityById(userCityId: string) {
  logger.debug(`Entering DELETE BY ID SERVICES - userCities/:id`);
  return UserCityDao.deleteUserCityById(userCityId);
}

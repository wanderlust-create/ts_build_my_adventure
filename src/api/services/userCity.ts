import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import UserCityDao from "../daos/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};

function listAllUserCities() {
  logger.debug(`Entering GET All SERVICE - user-cities/ endpoint.`);
  return UserCityDao.listAllUserCities();
}
function createUserCity(userCityData: UserCity) {
  logger.debug(
    `Entering CREATE SERVICE -user-cities/ endpoint ${userCityData}`
  );
  return UserCityDao.createUserCity(userCityData);
}
function deleteUserCityById(userCityId: string) {
  logger.debug(`Entering DELETE BY ID SERVICE - user-cities/:id`);
  return UserCityDao.deleteUserCityById(userCityId);
}

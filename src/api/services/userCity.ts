import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import UserCityDao from "../daos/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};

function listAllUserCities(): Promise<UserCity[]> {
  logger.debug(`Entering GET All SERVICES - user-cities/ endpoint.`);
  return UserCityDao.listAllUserCities();
}
function createUserCity(userCityData: UserCity): Promise<UserCity> {
  logger.debug(
    `Entering CREATE SERVICES -user-cities/ endpoint ${userCityData}`
  );
  return UserCityDao.createUserCity(userCityData);
}
function deleteUserCityById(userCityId: string): Promise<UserCity[]> {
  logger.debug(`Entering DELETE BY ID SERVICES - user-cities/:id`);
  return UserCityDao.deleteUserCityById(userCityId);
}

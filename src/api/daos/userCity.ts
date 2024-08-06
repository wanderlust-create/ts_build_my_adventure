import logger from "../../loaders/logger";
import UserCity from "../models/userCity";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};

async function listAllUserCities() {
  logger.debug(`Entering GET ALL DAO- user-cities/ endpoint.`);
  return UserCity.query()
    .column("id", "userId", "cityId")
    .orderBy("created_at", "desc");
}

async function createUserCity(userCityData: UserCity) {
  logger.debug(`Entering CREATE DAO- user-cities/ endpoint ${userCityData}`);
  const newUserCity = await UserCity.query().insert({
    userId: userCityData.userId,
    cityId: userCityData.cityId,
  });
  return newUserCity;
}

async function deleteUserCityById(userCityId: string) {
  logger.debug(
    `Entering DELETE BY ID DAO- user-cities/:id endpoint ${userCityId}`
  );
  const deletedUserCity = await UserCity.query()
    .delete()
    .where({ id: userCityId })
    .returning("*");
  return deletedUserCity;
}

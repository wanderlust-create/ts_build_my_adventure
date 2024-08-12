import logger from "../../loaders/logger";
import UserCity from "../models/userCity";
import { ValidationError } from "objection";

export default {
  listAllUserCities,
  createUserCity,
  deleteUserCityById,
};
async function listAllUserCities() {
  logger.debug(`Entering GET ALL DAO- user-cities/ endpoint.`);
  try {
    const usercities = await UserCity.query()
      .column("id", "userId", "cityId")
      .orderBy("created_at", "desc");
    return usercities;
  } catch (err) {
    return err;
  }
}
async function createUserCity(userCityData: UserCity) {
  logger.debug(`Entering CREATE DAO- user-cities/ endpoint ${userCityData}`);
  try {
    const newUserCity = await UserCity.query().insert({
      userId: userCityData.userId,
      cityId: userCityData.cityId,
    });
    return newUserCity;
  } catch (err) {
    return err;
  }
}
async function deleteUserCityById(userCityId: string) {
  logger.debug(
    `Entering DELETE BY ID DAO- user-cities/:id endpoint ${userCityId}`
  );
  try {
    const deletedUserCity = await UserCity.query()
      .delete()
      .where({ id: userCityId })
      .returning("*");
    return deletedUserCity;
  } catch (err) {
    return err;
  }
}

import logger from "../../loaders/logger";
import User from "../models/user";
import UserDao from "../daos/user";

export default {
  listAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

function listAllUsers() {
  logger.debug(`Entering GET All SERVICE - users/ endpoint.`);
  return UserDao.listAllUsers();
}
function getUserById(userId: string) {
  logger.debug(`Entering GET BY ID SERVICE - users/:id endpoint ${userId}.`);
  return UserDao.getUserById(userId);
}
function createUser(userData: User) {
  logger.debug(`Entering CREATE SERVICE - users/ endpoint ${userData}`);
  return UserDao.createUser(userData);
}
function updateUserById(userId: string, userData: User) {
  logger.debug(`Entering UPDATE BY ID SERVICE - users/:id ${userData}`);
  return UserDao.updateUserById(userId, userData);
}
function deleteUserById(userId: string) {
  logger.debug(`Entering DELETE BY ID SERVICE - users/:id`);
  return UserDao.deleteUserById(userId);
}

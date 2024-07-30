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

function listAllUsers(): Promise<User[]> {
  logger.debug(`Entering GET All SERVICES - users/ endpoint.`);
  return UserDao.listAllUsers();
}
function getUserById(userId: string): Promise<User> {
  logger.debug(`Entering GET BY ID SERVICES - users/:id endpoint ${userId}.`);
  return UserDao.getUserById(userId);
}
function createUser(userData: User): Promise<User> {
  logger.debug(`Entering CREATE SERVICES - users/ endpoint ${userData}`);
  return UserDao.createUser(userData);
}
function updateUserById(userId: string, userData: User): Promise<User[]> {
  logger.debug(`Entering UPDATE BY ID SERVICES - users/:id ${userData}`);
  return UserDao.updateUserById(userId, userData);
}
function deleteUserById(userId: string): Promise<User[]> {
  logger.debug(`Entering DELETE BY ID SERVICES - users/:id`);
  return UserDao.deleteUserById(userId);
}

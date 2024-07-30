import logger from "../../loaders/logger";
import User from "../models/user";

export default {
  listAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

async function listAllUsers(): Promise<User[]> {
  logger.debug(`Entering GET ALL DAO- users/ endpoint.`);
  return User.query()
    .column("id", "firstName", "lastName", "email")
    .orderBy("created_at", "desc")
    .withGraphFetched("city");
}
async function getUserById(userId: string): Promise<User> {
  logger.debug(`Entering GET BY ID DAO- users/:id endpoint ${userId}`);
  return User.query()
    .findById(userId)
    .column("id", "firstName", "lastName", "email")
    .withGraphFetched("city");
}
async function createUser(userData: User): Promise<User> {
  logger.debug(`Entering CREATE DAO- users/ endpoint ${userData}`);
  const newUser = await User.query().insert({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  });
  return newUser;
}
async function updateUserById(
  userId: string,
  userData: User
): Promise<User[]> {
  logger.debug(`Entering UPDATE BY ID DAO- users/:id endpoint ${userData}`);
  const updatedUser = await User.query()
    .findById(userId)
    .patch({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    })
    .returning("*");
  return updatedUser;
}
async function deleteUserById(userId: string): Promise<User[]> {
  logger.debug(`Entering DELETE BY ID DAO- users/:id endpoint ${userId}`);
  const deletedUser = await User.query()
    .delete()
    .where({ id: userId })
    .returning("*");
  return deletedUser;
}

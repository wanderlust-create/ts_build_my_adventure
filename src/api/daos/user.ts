import logger from "../../loaders/logger";
import User from "../models/user";

export default {
  listAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

async function listAllUsers() {
  logger.debug(`Entering GET ALL DAO- users/ endpoint.`);
  try {
    const users = await User.query()
      .column("id", "firstName", "lastName", "email")
      .orderBy("created_at", "desc")
      .withGraphFetched("city");
    return users;
  } catch (err) {
    return err;
  }
}
async function getUserById(userId: string) {
  logger.debug(`Entering GET BY ID DAO- users/:id endpoint ${userId}`);
  try {
    const user = await User.query()
      .findById(userId)
      .column("id", "firstName", "lastName", "email")
      .withGraphFetched("city");
    return user;
  } catch (err) {
    return err;
  }
}
async function createUser(userData: User) {
  logger.debug(`Entering CREATE DAO- users/ endpoint ${userData}`);
  try {
    const newUser = await User.query().insert({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });
    return newUser;
  } catch (err) {
    return err;
  }
}
async function updateUserById(userId: string, userData: User) {
  logger.debug(`Entering UPDATE BY ID DAO- users/:id endpoint ${userData}`);
  try {
    const updatedUser = await User.query()
      .findById(userId)
      .patch({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      })
      .returning("*");
    return updatedUser;
  } catch (err) {
    return err;
  }
}
async function deleteUserById(userId: string) {
  logger.debug(`Entering DELETE BY ID DAO- users/:id endpoint ${userId}`);
  try {
    const deletedUser = await User.query()
      .delete()
      .where({ id: userId })
      .returning("*");
    return deletedUser;
  } catch (err) {
    return err;
  }
}

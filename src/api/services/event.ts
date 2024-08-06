import logger from "../../loaders/logger";
import Event from "../models/event";
import User from "../models/user";
import EventDao from "../daos/event";

export default {
  listAllEvents,
  filterEventsByCityId,
  filterEventsByUserId,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

function listAllEvents() {
  logger.debug(`Entering GET All SERVICE - events/ endpoint.`);
  return EventDao.listAllEvents();
}
function filterEventsByCityId(cityId: string) {
  logger.debug(
    `Entering FILTER EVENTS BY CITYID SERVICE - events?cityId=${cityId} endpoint.`
  );
  return EventDao.filterEventsByCityId(cityId);
}
function filterEventsByUserId(userId: string) {
  logger.debug(
    `Entering FILTER EVENTS BY USERID SERVICE - events?userId=${userId} endpoint.`
  );
  return EventDao.filterEventsByUserId(userId);
}
function getEventById(eventId: string) {
  logger.debug(`Entering GET BY ID SERVICE - events/:id endpoint ${eventId}.`);
  return EventDao.getEventById(eventId);
}
function createEvent(eventData: Event) {
  logger.debug(`Entering CREATE SERVICE - events/ endpoint ${eventData}`);
  return EventDao.createEvent(eventData);
}
function updateEventById(eventId: string, eventData: Event) {
  logger.debug(`Entering UPDATE BY ID SERVICE - events/:id ${eventData}`);
  return EventDao.updateEventById(eventId, eventData);
}
function deleteEventById(eventId: string) {
  logger.debug(`Entering DELETE BY ID SERVICE - events/:id`);
  return EventDao.deleteEventById(eventId);
}

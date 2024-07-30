import logger from "../../loaders/logger";
import Event from "../models/event";
import eventDao from "../daos/event";

export default {
  listAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

function listAllEvents() {
  logger.debug(`Entering GET All SERVICES - events/ endpoint.`);
  return eventDao.listAllEvents();
}
function getEventById(eventId: string) {
  logger.debug(`Entering GET BY ID SERVICES - events/:id endpoint ${eventId}.`);
  return eventDao.getEventById(eventId);
}
function createEvent(eventData: Event) {
  logger.debug(`Entering CREATE SERVICES - events/ endpoint ${eventData}`);
  return eventDao.createEvent(eventData);
}
function updateEventById(eventId: string, eventData: Event) {
  logger.debug(`Entering UPDATE BY ID SERVICES - events/:id ${eventData}`);
  return eventDao.updateEventById(eventId, eventData);
}
function deleteEventById(eventId: string) {
  logger.debug(`Entering DELETE BY ID SERVICES - events/:id`);
  return eventDao.deleteEventById(eventId);
}

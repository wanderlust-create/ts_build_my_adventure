import logger from "../../loaders/logger";
import Event from "../models/event";
import EventDao from "../daos/event";

export default {
  listAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

function listAllEvents(): Promise<Event[]> {
  logger.debug(`Entering GET All SERVICES - events/ endpoint.`);
  return EventDao.listAllEvents();
}
function getEventById(eventId: string): Promise<Event> {
  logger.debug(`Entering GET BY ID SERVICES - events/:id endpoint ${eventId}.`);
  return EventDao.getEventById(eventId);
}
function createEvent(eventData: Event): Promise<Event> {
  logger.debug(`Entering CREATE SERVICES - events/ endpoint ${eventData}`);
  return EventDao.createEvent(eventData);
}
function updateEventById(eventId: string, eventData: Event): Promise<Event[]> {
  logger.debug(`Entering UPDATE BY ID SERVICES - events/:id ${eventData}`);
  return EventDao.updateEventById(eventId, eventData);
}
function deleteEventById(eventId: string): Promise<Event[]> {
  logger.debug(`Entering DELETE BY ID SERVICES - events/:id`);
  return EventDao.deleteEventById(eventId);
}

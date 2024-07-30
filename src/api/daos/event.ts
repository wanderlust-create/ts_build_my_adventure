import logger from "../../loaders/logger";
import Event from "../models/event";

export default {
  listAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

async function listAllEvents(): Promise<Event[]> {
  logger.debug(`Entering GET ALL DAO- events/ endpoint.`);
  return Event.query()
    .column("id", "title")
    .orderBy("created_at", "desc")
    .withGraphFetched("city");
}
async function getEventById(eventId: string): Promise<Event> {
  logger.debug(`Entering GET BY ID DAO- events/:id endpoint ${eventId}`);
  return Event.query()
    .findById(eventId)
    .column("id", "title")
    .withGraphFetched("city");
}
async function createEvent(eventData: Event): Promise<Event> {
  logger.debug(`Entering CREATE DAO- events/ endpoint ${eventData}`);
  const newEvent = await Event.query().insert({
    cityId: eventData.cityId,
    title: eventData.title,
  });
  return newEvent;
}
async function updateEventById(
  eventId: string,
  eventData: Event
): Promise<Event[]> {
  logger.debug(`Entering UPDATE BY ID DAO- events/:id endpoint ${eventData}`);
  const updatedEvent = await Event.query()
    .findById(eventId)
    .patch({
      cityId: eventData.cityId,
      title: eventData.title,
    })
    .returning("*");
  return updatedEvent;
}
async function deleteEventById(eventId: string): Promise<Event[]> {
  logger.debug(`Entering DELETE BY ID DAO- events/:id endpoint ${eventId}`);
  const deletedEvent = await Event.query()
    .delete()
    .where({ id: eventId })
    .returning("*");
  return deletedEvent;
}

import logger from "../../loaders/logger";
import Event from "../models/event";
import User from "../models/user";

export default {
  listAllEvents,
  filterEventsByCityId,
  filterEventsByUserId,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

async function listAllEvents() {
  logger.debug(`Entering GET ALL DAO- events/ endpoint.`);
  try {
    const events = Event.query()
      .column("id", "title")
      .orderBy("created_at", "desc")
      .withGraphFetched("city");
    return events;
  } catch (err) {
    return err;
  }
}
async function filterEventsByCityId(cityId: string) {
  logger.debug(
    `Entering FILTER EVENTS BY CITYID DAO- events?cityId=${cityId} endpoint.`
  );
  try {
    const events = await Event.query()
      .select("id", "title", "cityId")
      .where("cityId", cityId);
    return events;
  } catch (err) {
    return err;
  }
}
async function filterEventsByUserId(userId: string) {
  logger.debug(
    `Entering FILTER EVENTS BY USERID DAO- events?userId=${userId} endpoint.`
  );
  try {
    const events = await User.query()
      .findById(userId)
      .column("id", "firstName", "lastName")
      .withGraphFetched("[city.[event]]");
    return events;
  } catch (err) {
    return err;
  }
}
async function getEventById(eventId: string) {
  logger.debug(`Entering GET BY ID DAO- events/:id endpoint ${eventId}`);
  try {
    const event = await Event.query()
      .findById(eventId)
      .column("id", "title")
      .withGraphFetched("city");
    return event;
  } catch (err) {
    return err;
  }
}
async function createEvent(eventData: Event) {
  logger.debug(`Entering CREATE DAO- events/ endpoint ${eventData}`);
  try {
    const newEvent = await Event.query().insert({
      cityId: eventData.cityId,
      title: eventData.title,
    });
    return newEvent;
  } catch (err) {
    return err;
  }
}
async function updateEventById(eventId: string, eventData: Event) {
  logger.debug(`Entering UPDATE BY ID DAO- events/:id endpoint ${eventData}`);
  try {
    const updatedEvent = await Event.query()
      .findById(eventId)
      .patch({
        cityId: eventData.cityId,
        title: eventData.title,
      })
      .returning("*");
    return updatedEvent;
  } catch (err) {
    return err;
  }
}
async function deleteEventById(eventId: string) {
  logger.debug(`Entering DELETE BY ID DAO- events/:id endpoint ${eventId}`);
  try {
    const deletedEvent = await Event.query()
      .delete()
      .where({ id: eventId })
      .returning("*");
    return deletedEvent;
  } catch (err) {
    return err;
  }
}

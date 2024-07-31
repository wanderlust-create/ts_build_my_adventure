import * as express from "express";
import logger from "../../loaders/logger";
import Event from "../models/event";
import EventService from "../services/event";
import User from "../models/user";

export default {
  listAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

async function listAllEvents(
  req: express.Request,
  res: express.Response
): Promise<Event[]| User> {
  logger.debug(`Entering GET All CONTROLLER - events/ endpoint.`);
  type ReturnValue = User | Event[];
  let events: ReturnValue = [];
  if (req.query.cityId) {
    let cityId = req.query.cityId as string;
    events = await EventService.filterEventsByCityId(cityId);
  } else if (req.query.userId) {
    let userId = req.query.userId as string;
    events = await EventService.filterEventsByUserId(userId);
  } else {
    events = await EventService.listAllEvents();
  }
  try {
    if (!events) {
      res.status(404).json({ error: `No events found` });
      return;
    } else {
      res.json(events);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function getEventById(
  req: express.Request,
  res: express.Response
): Promise<Event> {
  logger.debug(`Entering GET BY ID CONTROLLER - events/:id endpoint.`);
  const event = await EventService.getEventById(req.params.id);
  try {
    if (event === undefined) {
      res.status(404).json({ error: "No event found" });
      return;
    } else {
      res.json(event);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function createEvent(
  req: express.Request,
  res: express.Response
): Promise<Event> {
  logger.debug(`Entering CREATE CONTROLLER - events/ endpoint.`);
  const newEvent = await EventService.createEvent(req.body);
  try {
    if (newEvent === undefined) {
      res.status(404).json({ error: "Event not created" });
      return;
    } else {
      res.json(newEvent);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function updateEventById(
  req: express.Request,
  res: express.Response
): Promise<Event[]> {
  logger.debug(`Entering UPDATE BY ID CONTROLLER - events/:id endpoint.`);
  const id = req.params.id;
  const updatedEvent = await EventService.updateEventById(id, req.body);
  try {
    if (!updatedEvent) {
      res.status(404).json({ error: "Event not updated" });
      return;
    } else {
      res.json(updatedEvent);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function deleteEventById(
  req: express.Request,
  res: express.Response
): Promise<Event[]> {
  logger.debug(`Entering DELETE BY ID CONTROLLER - events/:id endpoint.`);
  try {
    const id = req.params.id;
    const deletedEvent = await EventService.deleteEventById(id);
    if (deletedEvent.length === 0) {
      res.status(404).json({ error: "Event not deleted" });
      return;
    } else {
      logger.info("Event Deleted:", deletedEvent);
      res.json({ alert: "Event Deleted", deletedEvent });
    }
  } catch (err) {
    logger.error(err);
    res.status(500).json(err);
  }
}

import * as express from "express";
import logger from "../../loaders/logger";
import Event from "../models/event";
import EventService from "../services/event";
import User from "../models/user";
import event from "api/daos/event";

export default {
  listAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};

async function listAllEvents(req: express.Request, res: express.Response) {
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
async function getEventById(req: express.Request, res: express.Response) {
  logger.debug(`Entering GET BY ID CONTROLLER - events/:id endpoint.`);
  try {
    const event = await EventService.getEventById(req.params.id);
    if (event.statusCode) {
      res.status(event.statusCode).json({ error: event.type });
      return;
    } else {
      res.json(event);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function createEvent(req: express.Request, res: express.Response) {
  logger.debug(`Entering CREATE CONTROLLER - events/ endpoint.`);
  try {
    const newEvent = await EventService.createEvent(req.body);
    if (newEvent.statusCode) {
      res.status(newEvent.statusCode).json({ error: newEvent.type });
      return;
      // foreign key not found
    } else if (newEvent.nativeError) {
      res.status(400).json({ error: newEvent.nativeError.detail });
    } else {
      res.json(newEvent);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function updateEventById(req: express.Request, res: express.Response) {
  logger.debug(`Entering UPDATE BY ID CONTROLLER - events/:id endpoint.`);
  try {
    const updatedEvent = await EventService.updateEventById(
      req.params.id,
      req.body
    );
    if (updatedEvent.statusCode) {
      res.status(updatedEvent.statusCode).json({ error: updatedEvent.type });
      return;
    } else {
      res.json(updatedEvent);
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}
async function deleteEventById(req: express.Request, res: express.Response) {
  logger.debug(`Entering DELETE BY ID CONTROLLER - events/:id endpoint.`);
  try {
    const deletedEvent = await EventService.deleteEventById(req.params.id);
    if (deletedEvent.statusCode) {
      res.status(deletedEvent.statusCode).json({ error: deletedEvent.type });
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

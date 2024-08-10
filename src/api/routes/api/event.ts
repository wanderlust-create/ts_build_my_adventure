import { NextFunction, Request, Response, Router } from "express";
import EventController from "../../controllers/event";

// Error Handler
import validateDto from "../../middlewear/validate-dto";
import eventDto from "../../reqBodyValidation/dtos/event";

const route = Router();

export default (app: Router) => {
  app.use("/events", route);
  route.get("/", EventController.listAllEvents);
  route.get("/:id", EventController.getEventById);
  route.post(
    "/",
    validateDto(eventDto.eventPostDto.data),
    EventController.createEvent
  );
  route.patch(
    "/:id",
    validateDto(eventDto.eventPatchDto.data),
    EventController.updateEventById
  );
  route.delete("/:id", EventController.deleteEventById);
};

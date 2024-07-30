import { Router } from "express";
import city from "./city";
import event from './event'

const app = Router();
city(app)
event(app)

export default app;

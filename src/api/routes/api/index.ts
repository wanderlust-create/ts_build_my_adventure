import { Router } from "express";
import city from "./city";
import event from './event'
import user from './user'

const app = Router();
city(app)
event(app)
user(app)

export default app;

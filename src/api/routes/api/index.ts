import { Router } from "express";
import city from "./city";
import event from './event'
import user from './user'
import userCity from "./userCity";

const app = Router();
city(app)
event(app)
user(app)
userCity(app)

export default app;

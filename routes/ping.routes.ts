// imports
import { Router } from "express";
import { body } from "express-validator";
// controllers
import { ping } from "../controllers/ping.controller";
// express validator
import { errorHandler } from "../middlewares/express-validator";

const pingRouter = Router();

pingRouter.post("/", [body("campo1").notEmpty().withMessage("Campo invalido"), errorHandler], ping);

export default pingRouter;

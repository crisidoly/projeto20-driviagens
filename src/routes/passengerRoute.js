import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createPassenger } from "../controllers/passengersController.js";
import schemaPassenger from "../schemas/PassengersSchemas.js";



const passengerRouter = Router()

passengerRouter.post('/passenger',(validateSchema(schemaPassenger)), createPassenger )

export default passengerRouter
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import choiceCities from "../controllers/citiesController.js";
import schemaCities from "../schemas/citiesSchemas.js";

const citiesRouter = Router()

citiesRouter.post('/cities',validateSchema(schemaCities),choiceCities)

export default citiesRouter
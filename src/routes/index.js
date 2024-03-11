import { Router } from "express"
import passengerRouter from "./passengerRoute.js"
import citiesRouter from "./citiesRoute.js"
import flightsRouter from "./flightsRoute.js"
import travelsRouter from "./travelsRoute.js"

const router = Router()
router.use(passengerRouter)
router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter)

export default router
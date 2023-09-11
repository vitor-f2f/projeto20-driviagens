import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema.js"
import flightsSchema from "../schemas/flights.schema.js"
import { create, read } from "../controllers/flights.controller.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightsSchema), create)
flightsRouter.get("/flights", read);

export default flightsRouter;
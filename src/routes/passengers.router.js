import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema.js"
import passengersSchema from "../schemas/passengers.schema.js"
import { create } from "../controllers/passengers.controller.js"

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengersSchema), create)

export default passengersRouter;
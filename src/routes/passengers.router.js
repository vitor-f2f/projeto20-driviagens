import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema.js"
import passengersSchema from "../schemas/passengers.schema.js"
import { create, read } from "../controllers/passengers.controller.js"

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengersSchema), create)
passengersRouter.get("/passengers/travels", read);

export default passengersRouter;
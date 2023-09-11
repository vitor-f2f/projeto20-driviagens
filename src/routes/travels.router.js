import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema.js"
import travelsSchema from "../schemas/travels.schema.js"
import { create } from "../controllers/travels.controller.js"

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelsSchema), create)

export default travelsRouter;
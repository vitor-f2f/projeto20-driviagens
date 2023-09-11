import { Router } from "express"
import { validateSchema } from "../middleware/validate.schema.js"
import citiesSchema from "../schemas/cities.schema.js"
import { create } from "../controllers/cities.controller.js"

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citiesSchema), create)

export default citiesRouter
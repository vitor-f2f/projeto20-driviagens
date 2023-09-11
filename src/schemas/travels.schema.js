import Joi from "joi";

const travelsSchema = Joi.object({
    passengerId: Joi.number().integer().positive().required().messages({
        "any.required": "Passenger ID is required",
        "number.base": "Passenger ID must be a number",
        "number.integer": "Passenger ID must be an integer",
        "number.positive": "Passenger ID cannot be a negative number",
    }),
    flightId: Joi.number().integer().positive().required().messages({
        "any.required": "Flight ID is required",
        "number.base": "Flight ID must be a number",
        "number.integer": "Flight ID must be an integer",
        "number.positive": "Flight ID cannot be a negative number",
    })
});

export default travelsSchema;
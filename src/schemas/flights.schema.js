import Joi from "joi";

const flightsSchema = Joi.object({
    origin: Joi.number().integer().positive().required().messages({
        "any.required": "Origin city is required",
        "number.base": "Origin city ID must be a number",
        "number.integer": "Origin city ID must be an integer",
        "number.positive": "Origin city ID cannot be a negative number",
    }),
    destination: Joi.number().integer().positive().required().messages({
        "any.required": "Destination city is required",
        "number.base": "Destination city ID must be a number",
        "number.integer": "Destination city ID must be an integer",
        "number.positive": "Destination city ID cannot be a negative number",
    }),
    date: Joi.string()
        .regex(
            /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-((202[3-9])|203[0-3])$/
        )
        .required()
        .messages({
            "any.required": "Date is required",
            "string.pattern.base": "Date must be in the format DD-MM-YYYY",
            "string.pattern.invert.base": "Invalid date format. Please use DD-MM-YYYY"
        }),
});

export default flightsSchema;
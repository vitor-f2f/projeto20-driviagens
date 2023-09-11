import Joi from "joi";

const citiesSchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        "any.required": "City name is required",
        "string.empty": "City name cannot be empty",
        "string.min": "City name must have at least 2 characters",
        "string.max": "City name can have at most 50 characters",
    }),
});

export default citiesSchema;
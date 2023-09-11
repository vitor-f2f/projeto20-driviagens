import { stripHtml } from 'string-strip-html';

export function validateSchema(schema) {
    return function (req, res, next) {
        const cleanData = {};

        for (const [key, value] of Object.entries(req.body)) {
            cleanData[key] = typeof value === 'string' ? stripHtml(value).result.trim() : value;
        }

        const { error } = schema.validate(cleanData, { abortEarly: false });

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(" ");
            const validationError = new Error(errorMessage);
            validationError.type = "validation";
            throw validationError;
        }
        next();
    };
}
export function notFound(variable = "This") {
    const error = new Error(`${variable} could not be found.`);
    error.type = "notFound";
    return error;
}
export function conflict(variable = "This") {
    const error = new Error(`${variable} already exists.`);
    error.type = "conflict";
    return error;
}
export function unprocessable(variable = "This") {
    const error = new Error(`${variable} is not a valid entity.`);
    error.type = "unprocessable";
    return error;
}
export function serverError(message = "Internal server error.") {
    const error = new Error(message);
    error.type = "serverError";
    return error;
}
export function badRequest(message = "Invalid request.") {
    const error = new Error(message);
    error.type = "badRequest";
    return error;
}
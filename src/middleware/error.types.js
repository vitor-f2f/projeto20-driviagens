export function notFound(message = "This could not be found.") {
    const error = new Error(message);
    error.type = "notFound";
    return error;
}
export function conflict(message = "This already exists.") {
    const error = new Error(message);
    error.type = "conflict";
    return error;
}
export function unprocessable(message = "This is not a valid entity") {
    const error = new Error(message);
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
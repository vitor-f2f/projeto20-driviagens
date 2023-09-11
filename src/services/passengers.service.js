import passengersRepository from "../repositories/passengers.repository.js";

const createPassenger = async (data) => {
    const exists = await passengersRepository.checkPassenger(data.firstName, data.lastName);
    if (exists) {
        const conflictError = new Error("Passenger already exists");
        conflictError.type = "conflict";
        throw conflictError;
    }

    const newPassenger = await passengersRepository.addPassenger(data.firstName, data.lastName);
    return newPassenger;
}

const getPassengers = async (name) => {
    const list = await passengersRepository.getList(name);

    if (list.length > 10) {
        const serverError = new Error("Too many results.");
        serverError.type = "serverError";
        throw serverError;
    }

    return list;
}

const passengersService = {
    createPassenger,
    getPassengers
};

export default passengersService;
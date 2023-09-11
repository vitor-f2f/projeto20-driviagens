import { conflict, serverError } from "../middleware/error.types.js";
import passengersRepository from "../repositories/passengers.repository.js";

const createPassenger = async (data) => {
    const exists = await passengersRepository.checkPassenger(data.firstName, data.lastName);
    if (exists) {
        throw conflict("Passenger already registered.");
    }

    const newPassenger = await passengersRepository.addPassenger(data.firstName, data.lastName);
    return newPassenger;
}

const getPassengers = async (name) => {
    const list = await passengersRepository.getList(name);
    if (list.length > 10) {
        throw serverError("Too many results.");
    }
    return list;
}

const passengersService = {
    createPassenger,
    getPassengers
};

export default passengersService;
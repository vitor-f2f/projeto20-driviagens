import { notFound } from "../middleware/error.types.js";
import travelsRepository from "../repositories/travels.repository.js";

const createTravel = async (data) => {
    const validPassenger = await travelsRepository.checkPassenger(data.passengerId);
    if (!validPassenger) {
        throw notFound("Passenger could not be found.");
    }

    const validFlight = await travelsRepository.checkFlight(data.flightId);
    if (!validFlight) {
        throw notFound("Flight could not be found.");
    }

    const newTravel = await travelsRepository.addTravel(data.passengerId, data.flightId);
    return newTravel;
}

const travelsService = {
    createTravel,
};

export default travelsService;
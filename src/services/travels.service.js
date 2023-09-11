import travelsRepository from "../repositories/travels.repository.js";

const createTravel = async (data) => {
    const validPassenger = await travelsRepository.checkPassenger(data.passengerId);
    if (!validPassenger) {
        const notFoundError = new Error("Passenger not found");
        notFoundError.type = "notFound";
        throw notFoundError;
    }

    const validFlight = await travelsRepository.checkFlight(data.flightId);
    if (!validFlight) {
        const notFoundError = new Error("Flight number not found");
        notFoundError.type = "notFound";
        throw notFoundError;
    }

    const newTravel = await travelsRepository.addTravel(data.passengerId, data.flightId);
    return newTravel;
}

const travelsService = {
    createTravel,
};

export default travelsService;
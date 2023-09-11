import travelsRepository from "../repositories/travels.repository.js";

const createTravel = async (data) => {
    const validPassenger = await travelsRepository.checkPassenger(data.passengerId);
    const validFlight = await travelsRepository.checkFlight(data.flightId);

    if (!validPassenger) {
        const notFoundError = new Error("Passenger not found");
        notFoundError.type = "notFound";
        throw notFoundError;
    }
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
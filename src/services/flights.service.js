import flightsRepository from "../repositories/flights.repository.js";
import moment from 'moment';

const createFlight = async (data) => {
    const validOrigin = await flightsRepository.checkCity(data.origin);
    if (!validOrigin) {
        const notFoundError = new Error("Origin city not found");
        notFoundError.type = "notFound";
        throw notFoundError;
    }

    const validDestination = await flightsRepository.checkCity(data.destination);
    if (!validDestination) {
        const notFoundError = new Error("Destination city not found");
        notFoundError.type = "notFound";
        throw notFoundError;
    }

    const formattedDate = moment(data.date, 'DD-MM-YYYY').format('YYYY-MM-DD');

    const newFlight = await flightsRepository.addFlight(data.origin, data.destination, formattedDate);
    return newFlight;
}

const flightsService = {
    createFlight,
};

export default flightsService;
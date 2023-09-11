import flightsRepository from "../repositories/flights.repository.js";
import moment from 'moment';
import dayjs from 'dayjs';
import { notFound, unprocessable, badRequest, conflict } from "../middleware/error.types.js";

const createFlight = async (data) => {
    const validOrigin = await flightsRepository.checkCity(data.origin);
    if (!validOrigin) {
        throw notFound("Origin city could not be found.");
    }

    const validDestination = await flightsRepository.checkCity(data.destination);
    if (!validDestination) {
        throw notFound("Destination city could not be found.");
    }

    if (data.origin === data.destination) {
        throw conflict("Invalid origin and destination combination.");
    }

    const formattedDate = moment(data.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
    const currentDate = moment().format("YYYY-MM-DD");

    if (formattedDate < currentDate) {
        throw unprocessable("Travel must be scheduled in a future date.")
    }

    const newFlight = await flightsRepository.addFlight(data.origin, data.destination, formattedDate);
    return newFlight;
}

const getFlights = async (origin, destination, smaller, bigger) => {
    if ((!smaller && bigger) || (smaller && !bigger)) {
        throw unprocessable("Initial or final date");
    }

    const dateFormat = "DD-MM-YYYY";
    const smallerObj = moment(smaller, dateFormat, true);
    const biggerObj = moment(bigger, dateFormat, true);

    if (!smallerObj.isValid() || !biggerObj.isValid()) {
        throw new Error("Invalid date format.");
    }

    if (biggerObj.isBefore(smallerObj)) {
        throw badRequest("Final date can not be earlier than initial date");
    }

    if ((origin || destination) && origin === destination) {
        throw badRequest("Origin and destination must be different cities");
    }
    let formattedSmaller;
    let formattedBigger;
    if (smaller) formattedSmaller = moment(smaller, 'DD-MM-YYYY').format('YYYY-MM-DD');
    if (bigger) formattedBigger = moment(bigger, 'DD-MM-YYYY').format('YYYY-MM-DD');


    const flightList = await flightsRepository.getFlightList(origin, destination, formattedSmaller, formattedBigger);
    if (flightList.length == 0) {
        return [];
    }
    return flightList;
}

const flightsService = {
    createFlight,
    getFlights
};

export default flightsService;
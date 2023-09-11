import flightsRepository from "../repositories/flights.repository.js";
import moment from 'moment';
import dayjs from 'dayjs';
import { notFound, unprocessable, badRequest } from "../middleware/error.types.js";

const createFlight = async (data) => {
    const validOrigin = await flightsRepository.checkCity(data.origin);
    if (!validOrigin) {
        throw notFound("Origin city");
    }

    const validDestination = await flightsRepository.checkCity(data.destination);
    if (!validDestination) {
        throw notFound("Destination city");
    }

    const formattedDate = moment(data.date, 'DD-MM-YYYY').format('YYYY-MM-DD');

    const newFlight = await flightsRepository.addFlight(data.origin, data.destination, formattedDate);
    return newFlight;
}

const getFlights = async (origin, destination, smaller, bigger) => {
    if ((!smaller && bigger) || (smaller && !bigger)) {
        throw unprocessable("Initial or final date");
    }

    const dateFormat = "DD-MM-YYYY";
    if (!dayjs(smaller, dateFormat).isValid() || !dayjs(bigger, dateFormat).isValid()) {
        throw unprocessable("Date");
    }

    const smallerObj = dayjs(smaller, dateFormat);
    const biggerObj = dayjs(bigger, dateFormat);

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
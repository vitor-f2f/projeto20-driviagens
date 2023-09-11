import flightsRepository from "../repositories/flights.repository.js";
import moment from 'moment';
import dayjs from 'dayjs';

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

const getFlights = async (origin, destination, smaller, bigger) => {
    if ((!smaller && bigger) || (smaller && !bigger)) {
        const unprocessableError = new Error("Initial and final dates must be provided together");
        unprocessableError.type = "unprocessable";
        throw unprocessableError;
    }

    const dateFormat = "DD-MM-YYYY";
    if (!dayjs(smaller, dateFormat).isValid() || !dayjs(bigger, dateFormat).isValid()) {
        const unprocessableError = new Error("Invalid date");
        unprocessableError.type = "unprocessable";
        throw unprocessableError;
    }

    const smallerObj = dayjs(smaller, dateFormat);
    const biggerObj = dayjs(bigger, dateFormat);

    if (biggerObj.isBefore(smallerObj)) {
        const badRequest = new Error("Final date can not be earlier than initial date");
        badRequest.type = "badRequest";
        throw badRequest;
    }

    if ((origin || destination) && origin === destination) {
        const badRequest = new Error("Origin and destination must be different cities");
        badRequest.type = "badRequest";
        throw badRequest;
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
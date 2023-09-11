import httpStatus from "http-status";
import flightsService from "../services/flights.service.js";

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newFlight = await flightsService.createFlight(data);
        res.status(httpStatus.CREATED).json(newFlight);
    } catch (error) {
        console.log(error);
        if (error.type === "conflict") {
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.sendStatus(500);
    }
}

export const read = async (req, res) => {
    try {
        const origin = req.query["origin"];
        const destination = req.query["destination"];
        const smallerDate = req.query["smaller-date"];
        const biggerDate = req.query["bigger-date"];

        const flights = await flightsService.getFlights(origin, destination, smallerDate, biggerDate);
        return res.status(httpStatus.OK).json(flights);
    } catch (error) {
        console.log(error);
        if (error.type === "badRequest") {
            return res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
        if (error.type === "unprocessable") {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
        }
        return res.sendStatus(500);
    }
}
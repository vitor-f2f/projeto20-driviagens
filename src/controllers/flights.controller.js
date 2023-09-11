import httpStatus from "http-status";
import flightsService from "../services/flights.service.js";

export const create = async (req, res) => {
    const data = req.body;
    const newFlight = await flightsService.createFlight(data);
    res.status(httpStatus.CREATED).json(newFlight);
}

export const read = async (req, res) => {
    const origin = req.query["origin"];
    const destination = req.query["destination"];
    const smallerDate = req.query["smaller-date"];
    const biggerDate = req.query["bigger-date"];

    const flights = await flightsService.getFlights(origin, destination, smallerDate, biggerDate);
    return res.status(httpStatus.OK).json(flights);

}
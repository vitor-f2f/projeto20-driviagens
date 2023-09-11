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
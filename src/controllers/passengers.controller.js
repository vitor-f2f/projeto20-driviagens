import httpStatus from "http-status";
import passengersService from "../services/passengers.service.js";

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newPassenger = await passengersService.createPassenger(data);
        res.status(httpStatus.CREATED).json(newPassenger);
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
        const name = req.query["name"];
        const passengers = await passengersService.getPassengers(name);
        return res.status(httpStatus.OK).json(passengers);
    } catch (error) {
        console.log(error);
        if (error.type === "serverError") {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
        }
        return res.sendStatus(500);
    }
}
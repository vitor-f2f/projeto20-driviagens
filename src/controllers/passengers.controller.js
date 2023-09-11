import httpStatus from "http-status";
import passengersService from "../services/passengers.service.js";

export const create = async (req, res) => {
    const data = req.body;
    const newPassenger = await passengersService.createPassenger(data);
    res.status(httpStatus.CREATED).json(newPassenger);
}

export const read = async (req, res) => {
    const name = req.query["name"];
    const passengers = await passengersService.getPassengers(name);
    return res.status(httpStatus.OK).json(passengers);
}
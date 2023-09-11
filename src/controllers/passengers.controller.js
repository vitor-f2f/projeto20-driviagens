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
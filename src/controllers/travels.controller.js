import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";

export const create = async (req, res) => {
    const data = req.body;
    const newTravel = await travelsService.createTravel(data);
    res.status(httpStatus.CREATED).json(newTravel);
}
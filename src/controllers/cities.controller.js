import httpStatus from "http-status";
import citiesService from "../services/cities.service.js";

export const create = async (req, res) => {
    const data = req.body;
    const newCity = await citiesService.createCity(data);
    res.status(httpStatus.CREATED).json(newCity);
}
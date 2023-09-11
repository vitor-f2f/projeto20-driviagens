import httpStatus from "http-status";
import citiesService from "../services/cities.service.js";

export const create = async (req, res) => {
    try {
        const data = req.body;
        const newCity = await citiesService.createCity(data);
        res.status(httpStatus.CREATED).json(newCity);
    } catch (error) {
        console.log(error);
        if (error.type === "notFound") {
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        if (error.type === "conflict") {
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.sendStatus(500);
    }
}
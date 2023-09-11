import citiesRepository from "../repositories/cities.repository.js";
import httpStatus from "http-status";

const createCity = async (data) => {
    const exists = await citiesRepository.checkCity(data.name);
    if (exists) {
        throw new Error()
    }

    const newCity = await citiesRepository.addCity(data.name);
    return newCity;
}

const citiesService = {
    createCity,
};

export default citiesService;
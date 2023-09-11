import citiesRepository from "../repositories/cities.repository.js";
import { conflict } from "../middleware/error.types.js";

const createCity = async (data) => {
    const exists = await citiesRepository.checkCity(data.name);
    if (exists) {
        throw conflict("City already exists.");
    }

    const newCity = await citiesRepository.addCity(data.name);
    return newCity;
}

const citiesService = {
    createCity,
};

export default citiesService;
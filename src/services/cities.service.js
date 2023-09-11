import citiesRepository from "../repositories/cities.repository.js";

const createCity = async (data) => {
    const exists = await citiesRepository.checkCity(data.name);
    if (exists) {
        const conflictError = new Error("City name already exists");
        conflictError.type = "conflict";
        throw conflictError;
    }

    const newCity = await citiesRepository.addCity(data.name);
    return newCity;
}

const citiesService = {
    createCity,
};

export default citiesService;
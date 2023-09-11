import passengersRepository from "../repositories/passengers.repository.js";

const createPassenger = async (data) => {
    const exists = await passengersRepository.checkPassenger(data.firstName, data.lastName);
    if (exists) {
        const conflictError = new Error("Passenger already exists");
        conflictError.type = "conflict";
        throw conflictError;
    }

    const newPassenger = await passengersRepository.addPassenger(data.firstName, data.lastName);
    return newPassenger;
}

const passengersService = {
    createPassenger,
};

export default passengersService;
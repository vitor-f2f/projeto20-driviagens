import db from "../database/database.connection.js";

const addPassenger = async (first, last) => {
    const res = await db.query("INSERT INTO passengers (firstName, lastName) VALUES ($1, $2) RETURNING *", [first, last]);
    return res.rows[0];
}

const checkPassenger = async (first, last) => {
    const res = await db.query("SELECT * FROM passengers WHERE firstName = $1 AND lastName = $2", [first, last]);
    return res.rowCount > 0;
}

const passengersRepository = {
    addPassenger,
    checkPassenger
}

export default passengersRepository;
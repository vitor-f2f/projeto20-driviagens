import db from "../database/database.connection.js";

const addFlight = async (origin, destination, date) => {
    const res = await db.query("INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *", [origin, destination, date]);
    return res.rows[0];
}

const checkCity = async (id) => {
    const res = await db.query("SELECT * FROM cities WHERE id = $1", [id]);
    return res.rowCount > 0;
}

const flightsRepository = {
    addFlight,
    checkCity
}

export default flightsRepository;
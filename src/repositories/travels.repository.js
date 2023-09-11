import db from "../database/database.connection.js";

const addTravel = async (passenger, flight) => {
    const res = await db.query("INSERT INTO travels (passengerId, flightId) VALUES ($1, $2) RETURNING *", [passenger, flight]);
    return res.rows[0];
}

const checkPassenger = async (id) => {
    const res = await db.query("SELECT * FROM passengers WHERE id = $1", [id]);
    return res.rowCount > 0;
}

const checkFlight = async (id) => {
    const res = await db.query("SELECT * FROM flights WHERE id = $1", [id]);
    return res.rowCount > 0;
}

const travelsRepository = {
    addTravel,
    checkPassenger,
    checkFlight
}

export default travelsRepository;
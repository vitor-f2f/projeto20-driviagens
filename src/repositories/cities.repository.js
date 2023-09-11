import db from "../database/database.connection.js";

const addCity = async (name) => {
    const res = await db.query("INSERT INTO cities (name) VALUES ($1) RETURNING *", [name]);
    return res.rows[0];
}

const checkCity = async (name) => {
    const res = await db.query("SELECT * FROM cities WHERE name = $1", [name]);
    return res.rowCount > 0;
}

const citiesRepository = {
    addCity,
    checkCity
}

export default citiesRepository;
import db from "../database/database.connection.js";

const addPassenger = async (first, last) => {
    const res = await db.query("INSERT INTO passengers (firstName, lastName) VALUES ($1, $2) RETURNING *", [first, last]);
    return res.rows[0];
}

const checkPassenger = async (first, last) => {
    const res = await db.query("SELECT * FROM passengers WHERE firstName = $1 AND lastName = $2", [first, last]);
    return res.rowCount > 0;
}

const getList = async (name) => {
    let query = `
        SELECT
            CONCAT(passengers.firstName, ' ', passengers.lastName) AS passenger,
            COALESCE(COUNT(travels.id), 0) AS travels
        FROM
            passengers
        LEFT JOIN
            travels ON passengers.id = travels.passengerId
    `;
    const params = [];

    if (name) {
        query += ` WHERE CONCAT(passengers.firstName, ' ', passengers.lastName) ILIKE $1`;
        params.push(`%${name}%`);
    }

    query += ` 
        GROUP BY
            passengers.id
        ORDER BY
            travels DESC;
    `;

    const res = await db.query(query, params);
    if (res.length === 0) return [];
    return res.rows;
}

const passengersRepository = {
    addPassenger,
    checkPassenger,
    getList
}

export default passengersRepository;
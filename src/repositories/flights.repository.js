import db from "../database/database.connection.js";

const addFlight = async (origin, destination, date) => {
    const res = await db.query("INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *", [origin, destination, date]);
    return res.rows[0];
}

const checkCity = async (id) => {
    const res = await db.query("SELECT * FROM cities WHERE id = $1", [id]);
    return res.rowCount > 0;
}

const getFlightList = async (origin, destination, smaller, bigger) => {
    let query = `
        SELECT
            flights.id,
            o.name as origin,
            d.name as destination,
            TO_CHAR(flights.date, 'DD-MM-YYYY') as date
        FROM
            flights
        JOIN
            cities as o ON flights.origin = o.id
        JOIN
            cities as d ON flights.destination = d.id
        WHERE
            1=1
        `;
    const params = [];
    let i = 1;

    if (origin) {
        params.push(origin)
        query += ` AND o.name = $${i}`;
        i++;
    }

    if (destination) {
        params.push(destination);
        query += ` AND d.name = $${i}`;
        i++;
    }

    if (smaller && bigger) {
        query += ` AND date BETWEEN $${i} AND $${i + 1}`;
        params.push(smaller, bigger);
    }

    query += ` ORDER BY flights.date ASC;`
    const res = await db.query(query, params)
    return res.rows;
}

const flightsRepository = {
    addFlight,
    checkCity,
    getFlightList
}

export default flightsRepository;
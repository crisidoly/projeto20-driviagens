import db from "../database/database.js";

export default async function passengerRepository({firstname, lastname}){
    const result = await db.query(`INSERT INTO passengers ("firstname", "lastname") VALUES ($1,$2);`,[firstname,lastname])
    return result
}
import db from "../database/database.js";

async function findTravel({passengerid,flightid }) {
  const result = await db.query(
    `SELECT 'flights' AS table_name, EXISTS(SELECT 1 FROM flights WHERE id = $1) AS exists_in_flights
    UNION ALL
    SELECT 'passengers' AS table_name, EXISTS(SELECT 1 FROM passengers WHERE id = $2) AS exists_in_passengers;
`,[flightid,passengerid]
  );
  return result;
}

async function createTravel({ passengerid,flightid }) {
  await db.query(`INSERT INTO travels ("passengerid","flightid")
  VALUES ($1,$2) `,[passengerid,flightid]
  );
}
async function findTravelByName({name}){
  if(!name){
    const result = await db.query(`SELECT passengers.*, COUNT(travels) AS "travels" 
    FROM passengers JOIN travels ON passengers.id = travels."passengerid"
    GROUP BY passengers.id
    ORDER BY "travels" DESC 
    LIMIT 10;`);

    return result;
  }
  const result = await db.query(
    `SELECT passengers.*, COUNT(travels) AS "travels" FROM passengers JOIN travels ON passengers.id = travels."passengerid"
    WHERE  passengers."firstname" ILIKE $1 OR passengers."lastname" ILIKE $2
    GROUP BY passengers.id
    ORDER BY "travels" DESC
    LIMIT 10;`,
    [`%${name}%`, `%${name}%`]
  );

    return result
}
export const travelsRepository = { findTravel, createTravel,findTravelByName };
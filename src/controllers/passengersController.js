import httpStatus from "http-status";
import passengerRepository from "../repositories/passengerRepository.js";


export async function createPassenger(req,res){
    const {firstname, lastname} = req.body
    if(!firstname || !lastname) return res.sendStatus(httpStatus.BAD_REQUEST)
    
    await passengerRepository({ firstname, lastname });
    res.sendStatus(httpStatus.CREATED);
    
}

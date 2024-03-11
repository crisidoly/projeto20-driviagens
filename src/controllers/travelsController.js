import httpStatus from "http-status";
import { travelService } from "../services/travelServices.js";

export async function getTravels(req,res){
    const name = req.query
    const passengerByQtd = await travelService.getTravels(name);
     res.status(httpStatus.OK).send(passengerByQtd);
  
}
export async function choiceTravels(req,res){
    const {passengerid, flightid} = req.body
    try {
        await travelService.choiceTravels({passengerid, flightid})
        res.sendStatus(httpStatus.CREATED)
    } catch (error) {
       
        if (error.type === "notFound_Passenger_Or_flight"){
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}
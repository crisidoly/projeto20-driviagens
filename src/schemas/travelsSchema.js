import joi from "joi";

const schemaTravels = joi.object({
  passengerid: joi.number().integer().positive().required(),
  flightid: joi.number().integer().positive().required(),
});

export default schemaTravels;
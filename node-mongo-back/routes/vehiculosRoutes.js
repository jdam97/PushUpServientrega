import { Router } from "express";
import * as vehiculosConsulta from "../controllers/vehiculos.js"

const vehiculos = Router();

vehiculos.get("/",vehiculosConsulta.getAllAutos)
vehiculos.get("/id",vehiculosConsulta.getVehiculosById)
vehiculos.post("/",vehiculosConsulta.postVehiculos)
vehiculos.delete("/",vehiculosConsulta.deleteVehiculos)
vehiculos.put("/:_id",vehiculosConsulta.updateVehiculos)

export default vehiculos;

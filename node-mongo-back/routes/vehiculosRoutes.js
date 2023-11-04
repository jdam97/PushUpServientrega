import { Router } from "express";
import * as vehiculosConsulta from "../controllers/vehiculos.js"

const vehiculos = Router();

vehiculos.get("/",vehiculosConsulta.getAllAutos)
vehiculos.get("/vehiculosid",vehiculosConsulta.getVehiculosById)
vehiculos.post("/",vehiculosConsulta.postVehiculos)
vehiculos.delete("/",vehiculosConsulta.deleteVehiculos)
vehiculos.put("/",vehiculosConsulta.updateVehiculos)

export default vehiculos;

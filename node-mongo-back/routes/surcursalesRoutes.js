import { Router } from "express";
import * as surcursalesConsulta from "../controllers/surcursales.js"

const surcursales = Router();

surcursales.get("/",surcursalesConsulta.getAllSurcursales)
surcursales.get("/id",surcursalesConsulta.getSurcursalesById)
surcursales.post("/",surcursalesConsulta.postSurcursales)
surcursales.delete("/",surcursalesConsulta.deleteSurcursales)
surcursales.put("/:_id",surcursalesConsulta.updateSurcursales)

export default surcursales;

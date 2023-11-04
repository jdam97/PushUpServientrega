import { Router } from "express";
import * as enviosConsulta from "../controllers/envios.js"

const envios = Router();

envios.get("/",enviosConsulta.getAllEnvios)
envios.get("/id",enviosConsulta.getEnviosById)
envios.post("/",enviosConsulta.postEnvios)
envios.delete("/",enviosConsulta.deleteEnvios)
envios.put("/:_id",enviosConsulta.updateEnvios)

export default envios;

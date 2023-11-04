import { Router } from "express";
import * as empleadosConsulta from "../controllers/empleados.js"

const empleados = Router();

empleados.get("/",empleadosConsulta.getAllEmpleados)
empleados.get("/id",empleadosConsulta.getEmpleadosById)
empleados.post("/",empleadosConsulta.postEmpleados)
empleados.delete("/",empleadosConsulta.deleteEmpleados)
empleados.put("/:_id",empleadosConsulta.updateEmpleados)

export default empleados;

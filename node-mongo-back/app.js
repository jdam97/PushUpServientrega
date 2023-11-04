import express from "express";
import "dotenv/config"
import vehiculos from "./routes/vehiculosRoutes.js"
import empleados from "./routes/empleadosRoutes.js"
import envios from "./routes/enviosRoutes.js"
import surcursales from "./routes/surcursalesRoutes.js"

const app = express();
app.use(express.json())

//Endpoints
app.use("/vehiculos",vehiculos)
app.use("/empleados",empleados)
app.use("/envios",envios)
app.use("/surcursales",surcursales)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
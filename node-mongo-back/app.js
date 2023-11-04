import express from "express";
import "dotenv/config"
import vehiculos from "./routes/vehiculosRoutes.js"

const app = express();
app.use(express.json())

//Endpoints
app.use("/vehiculos",vehiculos)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
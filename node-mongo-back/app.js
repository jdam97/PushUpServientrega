import express from "express";
import "dotenv/config"
import {connectDB} from "./db/atlas.js"

const app = express();
app.use(express.json())



let config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})
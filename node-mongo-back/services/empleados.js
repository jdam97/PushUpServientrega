import { connectDB } from "../db/atlas.js";

//get
export const getEmpleados = async()=>{
    const db = await connectDB();
    const collection = db.collection('empleados');
    const data = await collection.find({})
    .toArray();
    return data
}


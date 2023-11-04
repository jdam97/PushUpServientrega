import { connectDB } from "../db/atlas.js";

export const getEmpleados = async()=>{
    const db = await connectDB();
    const collection = db.collection('empleados');
    const data = await collection.find({});
    return data
}

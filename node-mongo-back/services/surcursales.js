import { connectDB } from "../db/atlas.js";
import { ObjectId } from "bson";

//get
export const getSurcursales = async()=>{
    const db = await connectDB();
    const collection = db.collection('surcursales');
    const data = await collection.find({})
    .toArray();
    return data
}

//get by Id
export const getSurcursalesById = async(value)=>{
    const db = await connectDB();
    const collection = db.collection('surcursales');
    const data = await collection.find({_id:new ObjectId(value)})
    .toArray();
    return data
}

//post
export const PostSurcursales = async(value)=>{
    const db = await connectDB();
    const collection = db.collection('surcursales');
    const data = await collection.insertOne(value);
    return data
}

//Delete
export const deleteSurcursales = async(HospedajesID)=>{
    console.log(HospedajesID);
    let db = await connectDB();
    let collection = db.collection('surcursales');
    let data = await collection.deleteOne({_id: new ObjectId(HospedajesID)});
    return data
}

//Update
export const actualizarSurcursales= async(id,value)=>{
    let db = await connectDB();
    let collection = db.collection('surcursales');
    console.log(value);
    console.log(id);
    let data = await collection.updateOne({_id:new ObjectId(id) },{$set:value})
    return data
}



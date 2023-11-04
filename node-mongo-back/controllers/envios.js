import * as envios from "../services/envios.js"

//get all
export const getAllEnvios = async(req,res)=>{
    try {
        const data = await envios.getEnvios();
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener toda la consulta",
            error:error.message
        })

    }
}

//get by id
export const getEnviosById = async(req,res)=>{
    try {
        const data = await envios.getEnviosById(req.body._id);
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener por id",
            error:error.message
        })
    }
}

//Post
export const postEnvios = async(req,res)=>{
    try {
        const data = await envios.PostEnvios(req.body);
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo crear",
            error:error.message
        })
    }
}

//Delete
export const deleteEnvios = async(req,res)=>{
    try {
        const data = await envios.deleteEnvios(req.body._id);
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo eliminar",
            error:error.message
        })
    }
}

//Update
export const updateEnvios = async(req,res)=>{
    try {
        const data = await envios.actualizarEnvios(req.body._id,req.body);
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo actualizar",
            error:error.message
        })
    }
}
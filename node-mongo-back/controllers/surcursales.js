import * as surcursales from "../services/surcursales.js"

//get all
export const getAllSurcursales = async(req,res)=>{
    try {
        const data = await surcursales.getSurcursales();
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
export const getSurcursalesById = async(req,res)=>{
    try {
        const data = await surcursales.getSurcursalesById(req.body._id);
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
export const postSurcursales = async(req,res)=>{
    try {
        const data = await surcursales.PostSurcursales(req.body);
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
export const deleteSurcursales = async(req,res)=>{
    try {
        const data = await surcursales.deleteSurcursales(req.body._id);
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
export const updateSurcursales = async(req,res)=>{
    try {
        const data = await surcursales.actualizarSurcursales(req.params._id,req.body);
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
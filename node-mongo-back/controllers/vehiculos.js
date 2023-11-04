import * as vehiculos from "../services/vehiculos.js"

//All vehiculos
export const getAllAutos = async(req,res)=>{
    try {
        const data = await vehiculos.getVehiculos();
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los vehiculos",
            error:error.message
        })

    }
}

//Vehiculos by id
export const getVehiculosById = async(req,res)=>{
    try {
        const data = await vehiculos.getVehiculosById(req.body._id);
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener vehiculos por id",
            error:error.message
        })
    }
}

//Post
export const postVehiculos = async(req,res)=>{
    try {
        const data = await vehiculos.PostVehiculos(req.body);
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
export const deleteVehiculos = async(req,res)=>{
    try {
        const data = await vehiculos.deleteVehiculos(req.body._id);
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
export const updateVehiculos = async(req,res)=>{
    try {
        const data = await vehiculos.actualizarVehiculos(req.body._id,req);
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
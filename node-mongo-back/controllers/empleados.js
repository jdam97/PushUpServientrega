import * as empleados from "../services/empleados.js"

//get all
export const getAllEmpleados = async(req,res)=>{
    try {
        const data = await empleados.getEmpleados();
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
export const getEmpleadosById = async(req,res)=>{
    try {
        const data = await empleados.getEmpleadosById(req.body._id);
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
export const postEmpleados = async(req,res)=>{
    try {
        const data = await empleados.PostEmpleados(req.body);
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
export const deleteEmpleados = async(req,res)=>{
    try {
        const data = await empleados.deleteEmpleados(req.body._id);
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
export const updateEmpleados = async(req,res)=>{
    try {
        const data = await empleados.actualizarEmpleados(req.body._id,req.body);
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
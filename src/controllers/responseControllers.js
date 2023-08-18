const { Response } = require('../DB_connection');

const postResponse = async ({ FormId, UserId, formData }) => {

    if (!FormId || !UserId || !formData) {
        throw Error("Faltan datos");
    }

    const exists = await Response.findOne({ where: { FormId, UserId } })
    if (exists) throw Error("Ya existe esta respuesta para este formulario")

    const response = await Response.create({
        FormId,
        UserId,
        formData,
    });

    return response;

};

const putResponse = async ({ id, updatedData }) => {
    const existingResponse = await Response.findByPk(id);

    if (!existingResponse) throw Error("Respuesta no encontrada");

    const response = await existingResponse.update(updatedData);

    return response;
}

const getResponse = async (id) => {
    const found = await Response.findByPk(id)

    if (!found) throw Error('Respuesta no encontrada');

    return found;
}

const deleteOneResponse = async (id) => {
    const deleteRes = await Response.destroy({where:{id:+id}})
  
    if(!deleteRes) throw Error('La actividad no existe!')
  
    return deleteRes
  }

module.exports = {
    postResponse,
    putResponse,
    getResponse,
    deleteOneResponse
}
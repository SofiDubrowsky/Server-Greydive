const { Form } = require('../DB_connection');

const postForm = async ({ title, structure }) => {

    if (!title || !structure) {
        throw Error("Faltan datos");
    }

    const exists = await Form.findOne({ where: { title } })
    if (exists) throw Error("Ya existe un formulario con este titulo")

    const response = await Form.create({
        title,
        structure
    });

    return response;

};

const getFormByName = async (title) => {

    const form = await Form.findAll({
        where: { title }
    });

    if (!form.length) throw Error("Formulario no encontrado");
    return form;
}

const getFormId = async (id) => {
    const found = await Form.findByPk(id)
    if(!found) throw Error('Formulario no encontrado');

    return found;
}

module.exports = {
    postForm,
    getFormByName,
    getFormId,
};
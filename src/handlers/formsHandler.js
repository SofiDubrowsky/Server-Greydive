const { postForm, getFormByName, getFormId } = require('../controllers/formsControllers')
const { Form } = require('../DB_connection')

const createForm = async (req, res) => {
    const { title, structure } = req.body

    try {
        const response = await postForm({ title, structure });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

const getForms = async (req, res) => {
    try {
        const { title } = req.query
        const results = title ? await getFormByName(title) : await Form.findAll();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await getFormId(id);
    
        return res.status(200).json(form);
      } catch (error) {
        
        return res.status(404).json({error:error.message});
      }
}

module.exports = {
    createForm,
    getForms,
    getFormById,
};
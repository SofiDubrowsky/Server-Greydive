const { postResponse, putResponse, getResponse, deleteOneResponse } = require('../controllers/responseControllers')
const { Response } = require('../DB_connection');

const createResponse = async (req, res) => {
    const { FormId, UserId, formData } = req.body

    try {
        const response = await postResponse({ FormId, UserId, formData });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

const getResponses = async (req, res) => {
    try {
        const responseList = await Response.findAll();
        return res.status(200).json(responseList);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateResponse = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const editResponse = await putResponse({ id, updatedData })

        return res.status(200).json(editResponse)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getResponseById = async (req,res) =>{
    try {
      const { id } = req.params;
      const response = await getResponse(id);
  
      return res.status(200).json(response);
    } catch (error) {
      
      return res.status(404).json({error:error.message});
    }
  }

  const deleteResponse = async (req, res) => {
    try {
      const {id} = req.params
      const deleteAct = await deleteOneResponse(id)
  
      return res.status(200).json('Actividad borrada!')
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  }


module.exports = {
    createResponse,
    getResponses,
    updateResponse,
    getResponseById,
    deleteResponse
};
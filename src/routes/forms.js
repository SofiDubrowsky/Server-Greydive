const { Router } = require("express");
const formsRouter = Router();
const {createForm, getForms, getFormById} = require ("../handlers/formsHandler")

formsRouter
.post("/", createForm)
.get("/", getForms)
.get('/:id', getFormById)

module.exports = formsRouter;
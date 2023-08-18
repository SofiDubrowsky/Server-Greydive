const { Router } = require("express");
const responseRouter = Router();
const {createResponse, getResponses, updateResponse, getResponseById, deleteResponse} = require ("../handlers/responseHandler")

responseRouter
.post("/", createResponse)
.get("/", getResponses)
.get("/:id", getResponseById)
.put("/:id", updateResponse)
.delete("/:id", deleteResponse)

module.exports = responseRouter;
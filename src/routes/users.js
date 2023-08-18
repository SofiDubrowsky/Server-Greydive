const { Router } = require("express");
const usersRouter = Router();
const {createUser, getUserById} = require ("../handlers/usersHandlers")

usersRouter
.post("/", createUser)
.get("/:id", getUserById)

module.exports = usersRouter;
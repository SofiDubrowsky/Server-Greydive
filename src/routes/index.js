const { Router } = require("express");
const router = Router();
const formsRouter = require("./forms");
const resposeRouter = require("./response")
const usersRouter = require("./users")
const loginRouter = require("./login")

router.use("/forms", formsRouter);
router.use("/response", resposeRouter)
router.use("/users", usersRouter)
router.use("/login", loginRouter)

module.exports = router;
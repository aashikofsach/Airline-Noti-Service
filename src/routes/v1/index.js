const express = require("express");
const { infoController, emailController } = require("../../controllers/");

const router = express.Router();

router.get("/info", infoController.info);
router.post("/ticket", emailController.createTicket);

module.exports = router;

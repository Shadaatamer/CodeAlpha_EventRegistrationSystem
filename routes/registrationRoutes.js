const express = require("express");
const regController = require("../controllers/registrationController");
const router = express.Router();

router.route("/").get(regController.getAllReg).post(regController.createReg);
router.route("/:id").delete(regController.deleteReg);

module.exports = router;

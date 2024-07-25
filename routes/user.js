const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user')
router.get('/', UserController.findAll)
router.post('/', UserController.create)
module.exports = router
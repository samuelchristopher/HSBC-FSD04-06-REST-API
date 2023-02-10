const express = require('express');
const userController = require('../controllers/userController');
const controller = require('../controllers/controller');
const verifyTokenMiddleware = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', userController.getUser);
router.get('/me', verifyTokenMiddleware.verifyToken, controller.aboutMe);

module.exports = router;

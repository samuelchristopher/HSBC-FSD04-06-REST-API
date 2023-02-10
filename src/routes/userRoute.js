const express = require('express');
const userController = require('../controllers/userController');
// const controller = require('../controllers/controller');
const verifyTokenMiddleware = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/me', verifyTokenMiddleware.verifyToken, userController.aboutMe);

module.exports = router;

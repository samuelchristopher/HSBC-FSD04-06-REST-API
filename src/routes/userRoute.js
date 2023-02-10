const express = require('express');
const userController = require('../controllers/userController');
// const controller = require('../controllers/controller');
const verifyTokenMiddleware = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/me', verifyTokenMiddleware.verifyToken, userController.aboutMe);
router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;

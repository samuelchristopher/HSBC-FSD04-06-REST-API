const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.main);
// router.get('/me', Controller.aboutMe);

module.exports = router;

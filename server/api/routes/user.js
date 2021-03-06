var express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

router.post('/players', playerController.createPlayer)

module.exports = router;
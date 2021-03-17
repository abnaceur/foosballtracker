var express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

router.post('/add', gameController.createGame)

module.exports = router;
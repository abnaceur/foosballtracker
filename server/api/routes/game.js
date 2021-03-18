var express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

router.post('/add', gameController.createGame)
router.post('/stats', gameController.gameStatsCrl)

module.exports = router;
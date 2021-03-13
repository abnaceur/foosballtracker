var express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

router.post('/players/add', playerController.createPlayer)
router.get('/players', playerController.listPlayersCtl)

module.exports = router;
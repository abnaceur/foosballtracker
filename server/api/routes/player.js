var express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

router.post('/add', playerController.createPlayer)
router.get('/', playerController.listPlayersCtl)

module.exports = router;
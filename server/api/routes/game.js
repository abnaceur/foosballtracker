var express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

/**
 * @swagger
 * /api/v1/games/stats :
 *    get:
 *      description: get game statistiques 
 *      tags: [Game]
 *    responses:
 *      '200':
 *        description: Successfully list players
 *        schema:
 *          type: string
 *          format: string
 */
router.post('/stats', gameController.gameStatsCrl)

router.post('/add', gameController.createGame)
router.post('/ranking', gameController.gameRankingCrl)
router.post('/logs', gameController.gameLogsCrl)

module.exports = router;
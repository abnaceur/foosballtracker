var express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

/**
 * @swagger
 * /api/v1/players/add:
 *    post:
 *      description: Add a new players 
 *      tags: [Player]
 *    parameters:
 *      - name: player's name
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully create player
 *        schema:
 *          type: string
 *          format: string
 */
router.post('/add', playerController.createPlayer)


/**
 * @swagger
 * /api/v1/players/ :
 *    get:
 *      description: get all players list 
 *      tags: [Player]
 *    responses:
 *      '200':
 *        description: Successfully list players
 *        schema:
 *          type: string
 *          format: string
 */
router.get('/', playerController.listPlayersCtl)

module.exports = router;
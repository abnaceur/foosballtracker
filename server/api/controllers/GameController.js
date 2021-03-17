const gameService = require('../services/')

createGame = (req, res) => {
    gameService.creatNewGame.addGame(req.body.data, res);
}

module.exports = {
    createGame,
}
const gameService = require('../services/')

createGame = (req, res) => {
    gameService.creatNewGame.addGame(req.body.data, res);
}

gameStatsCrl = (req, res) => {
    gameService.getGameStats.infoGameStats(res);
}

module.exports = {
    createGame,
    gameStatsCrl
}
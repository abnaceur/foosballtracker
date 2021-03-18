const gameService = require('../services/')

createGame = (req, res) => {
    gameService.creatNewGame.addGame(req.body.data, res);
}

gameStatsCrl = (req, res) => {
    gameService.getGameStats.infoGameStats(res);
}

gameRankingCrl = (req, res) => {
    gameService.getGameRanking.infoGameRanking(res);
}

module.exports = {
    createGame,
    gameRankingCrl,
    gameStatsCrl
}
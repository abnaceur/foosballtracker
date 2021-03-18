const creatNewPlayer = require("./playerService");
const listAllPlayer = require("./listAllPlayer");
const creatNewGame = require("./gameService")
const getGameStats = require("./getGameStatsService");
const getGameRanking = require("./getGameRanking")

module.exports = {
    creatNewPlayer,
    getGameRanking,
    getGameStats,
    creatNewGame,
    listAllPlayer
}
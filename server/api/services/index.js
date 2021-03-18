const creatNewPlayer = require("./playerService");
const listAllPlayer = require("./listAllPlayer");
const creatNewGame = require("./gameService")
const getGameStats = require("./getGameStatsService");

module.exports = {
    creatNewPlayer,
    getGameStats,
    creatNewGame,
    listAllPlayer
}
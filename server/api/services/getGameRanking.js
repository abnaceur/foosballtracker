const PlayerDao = require("../Dao/PlayerDao");
const GameDao = require('../Dao/GameDao');
const helpers = require('../helpers/index')

async function infoGameRanking(res) {
    // Get ames
    let gameDao = new GameDao();
    let dataGame = await gameDao.getRanking();

    helpers.responseStatus(
        res, "List all players", 200, dataGame);
}

module.exports = {
    infoGameRanking
}
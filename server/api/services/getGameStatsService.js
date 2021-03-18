const PlayerDao = require("../Dao/PlayerDao");
const GameDao = require('../Dao/GameDao');
const helpers = require('../helpers/index')

async function infoGameStats(res) {
    // Get ames
    let gameDao = new GameDao();
    let dataGame = await gameDao.getAll();

    // Get players
    let playerDao = new PlayerDao();
    let data = await playerDao.getAll();

    helpers.responseStatus(
        res, "List all players", 200, {
            players: data.length,
            matches: dataGame.length
        });
}

module.exports = {
    infoGameStats
}

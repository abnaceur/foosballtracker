const PlayerDao = require("../Dao/PlayerDao");
const GameDao = require('../Dao/GameDao');
const helpers = require('../helpers/index')

async function infoGameRanking(res) {
    // Get ames
    let gameDao = new GameDao();
    let dataGame = await gameDao.getRanking();
    let dataTean = await gameDao.getTeamRanking();

    helpers.responseStatus(
        res, "Ranking list", 200, {
            players: dataGame,
            teams: dataTean
        });
}

async function infoGameLogs(res) {
    let gameDao = new GameDao();
    let gameLogs = await gameDao.getLogsData();

    helpers.responseStatus(
        res, "Logs data", 200, gameLogs);
}

module.exports = {
    infoGameRanking,
    infoGameLogs
}
const PlayerDao = require("../Dao/PlayerDao");
const helpers = require('../helpers/index')

async function getPlayers(res) {
    let playerDao = new PlayerDao();
    let data = await playerDao.getAll();

    helpers.responseStatus(
        res, "List all players", 200, data);
}

module.exports = {
    getPlayers
}
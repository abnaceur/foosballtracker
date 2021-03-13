const PlayerDao = require("../Dao/PlayerDao");
const helpers = require('../helpers/index')

async function addPlayer(req, res) {
    let playerDao = new PlayerDao();

    if (await playerDao.isNameExist(req.data))
        helpers.responseStatus(res, "This name already exists", 404, await playerDao.getAll());
    else if (await playerDao.create(req.data))
        helpers.responseStatus(res, "Player created with succes", 200, await playerDao.getAll());
    else helpers.responseStatus(res, "An error occured", 500, await playerDao.getAll());
}

module.exports = {
    addPlayer
}
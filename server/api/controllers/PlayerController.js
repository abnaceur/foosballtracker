const playerService = require('../services/')

createPlayer = (req, res) => {
    playerService.creatNewPlayer.addPlayer(req.body, res);
}

listPlayersCtl = (req, res) => {
    playerService.listAllPlayer.getPlayers(res);
}

module.exports = {
    createPlayer,
    listPlayersCtl
}
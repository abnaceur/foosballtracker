const helpers = require('../helpers/index');
const GameDao = require('../Dao/GameDao');

async function addGame(data, res) {
    let gameDao = new GameDao();
    
    let team1 = {
        player1Name: data.players[0],
        player2Name: data.players[1],
        pl1Goals: data.score.t1[data.players[0]] || 0,
        pl2Goals: data.score.t1[data.players[1]] || 0,
    }

    let team1Id = await gameDao.createTeam(team1)

    let team2 = {
        player1Name: data.players[2],
        player2Name: data.players[3],
        pl1Goals: data.score.t2[data.players[2]] || 0,
        pl2Goals: data.score.t2[data.players[3]] || 0,
    }

    let team2Id = await gameDao.createTeam(team2)

    // Create game
    let game = {
        team1Id, 
        team2Id, 
        winner: data.winner === "t2" ? team2Id : team1Id, 
        looser: data.winner === "t2" ? team1Id : team2Id,
        duration: data.duration,
        startedAt: data.startAt,
        finishedAt: data.endAt
    }
    
    await gameDao.createGame(game);
    
    helpers.responseStatus(res, "Match saved", 200, []);

}

module.exports = {
    addGame
}
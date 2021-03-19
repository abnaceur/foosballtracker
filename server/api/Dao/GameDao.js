const prepareQuery = require("../helpers/prepareQuery")
const db = require('../../config/dbConnection');

module.exports = class GameDao {

    constructor(playerId) {
        this.playerId = playerId;
    }

    async createTeam(team) {
        let query = `INSERT INTO team (player1Name, player2Name, player1pos, player2pos, pl1Goals, pl2Goals) \
        VALUES (?, ?, ?, ?, ?, ?)`;

        const {
            player1Name,
            player2Name,
            pl1Goals,
            pl2Goals
        } = team;

        let preparedQuery = await prepareQuery.prepareQuery(query, [player1Name, player2Name, "Defence", "Offence", pl1Goals, pl2Goals]);
        let response = await this.execQuery(preparedQuery);
        return response.insertId;
    }


    async createGame(game) {
        let query = `INSERT INTO game (team1Id, team2Id, winner, looser, duration, startedAt, finishedAt) \
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const {
            team1Id,
            team2Id,
            winner,
            looser,
            duration,
            startedAt,
            finishedAt,
        } = game;

        let preparedQuery = await prepareQuery
            .prepareQuery(query, [team1Id, team2Id, winner, looser, duration, startedAt, finishedAt]);
        let response = await this.execQuery(preparedQuery);
        return response.insertId;
    }

    async getAll() {
        return new Promise(async (resolve, reject) => {
            let query = "SELECT * FROM game";
            let preparedQuery = await prepareQuery.prepareQuery(query, [])
            let response = await this.execQuery(preparedQuery);
            resolve(response);
        })
    }

    async getRanking() {
        return new Promise(async (resolve, reject) => {
            let query = `SELECT player.name, 
            SUM(CASE WHEN player.name = team.player1Name THEN team.pl1Goals ELSE 0 END) + \
            SUM(CASE WHEN player.name = team.player2Name THEN team.pl2Goals ELSE 0 END) as goals, \
            COUNT(CASE WHEN player.name = team.player1Name THEN team.pl1Goals ELSE NULL END) + \
            COUNT(CASE WHEN player.name = team.player2Name THEN team.pl2Goals ELSE NULL END) as matches \
            FROM player INNER JOIN team ON player.name=team.player1Name OR player.name=team.player2Name \
            INNER JOIN game ON team.id=game.team1Id OR team.id=game.team2Id \ 
            GROUP BY player.name ORDER BY goals DESC`;
            let preparedQuery = await prepareQuery.prepareQuery(query, [])
            let response = await this.execQuery(preparedQuery);
            resolve(response);
        })
    }

    async getTeamRanking() {
        return new Promise(async (resolve, reject) => {
            let query = `
            SELECT team.player1Name, 
            team.player2Name,
            COUNT(CASE WHEN team.id = game.looser THEN game.looser ELSE NULL END) as lost, 
            COUNT(CASE WHEN team.id = game.winner THEN game.winner ELSE NULL END) as won 
            FROM game INNER JOIN team ON game.team1Id=team.id OR game.team2Id=team.id 
            GROUP BY team.player1Name, team.player2Name`;
            let preparedQuery = await prepareQuery.prepareQuery(query, [])
            let response = await this.execQuery(preparedQuery);
            resolve(response);
        })
    }

    async getLogsData() {
        return new Promise(async (resolve, reject) => {
            let query = `SELECT *
            FROM game  JOIN team ON game.team1Id=team.id OR game.team2Id=team.id
            ORDER BY game.startedAt DESC` 
            let preparedQuery = await prepareQuery.prepareQuery(query, [])
            let response = await this.execQuery(preparedQuery);
            resolve(response);
        })
    }


    execQuery(queryEntiity) {
        return new Promise((resolve, reject) => {
            db.query(queryEntiity, function (error, result) {
                if (error) throw error;
                console.log('QUERY EXECUTED SUCCESSFULLY');
                resolve(result);
            });
        })
    }

}
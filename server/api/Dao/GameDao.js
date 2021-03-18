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
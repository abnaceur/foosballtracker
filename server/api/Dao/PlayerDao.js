const prepareQuery = require("../helpers/prepareQuery")
const db = require('../../config/dbConnection');

module.exports = class PlayerDao {
    
    constructor(playerId) {
        this.playerId = playerId;
    }

    async create(data) {
        let query = `INSERT INTO player (name) \
        VALUES (?)`;
        let preparedQuery = await prepareQuery.prepareQuery(query, [data]);
        let response = await this.execQuery(preparedQuery);
        return response;
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

    async isNameExist(name) {
        return new Promise(async (resolve, reject) => {
            let query = "SELECT * FROM player WHERE name=?";
            let preparedQuery = await prepareQuery.prepareQuery(query, [name])
            let response = await this.execQuery(preparedQuery);
            response.length === 0 ? resolve(false) : resolve(true);
        })
    }

    async getAll() {
        return new Promise(async (resolve, reject) => {
            let query = "SELECT * FROM player";
            let preparedQuery = await prepareQuery.prepareQuery(query, [])
            let response = await this.execQuery(preparedQuery);
            resolve(response);
        })
    }
    
}
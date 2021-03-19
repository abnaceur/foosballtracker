require('dotenv').config();

const APP_API_URL = process.env.REACT_APP_API_URL;

const endpoint = {
    
    addNewPlayerApi: APP_API_URL + 'players/add',
    addNewGameApi: APP_API_URL + 'games/add',
    gameStataApi: APP_API_URL + 'games/stats',
    gameRankApi: APP_API_URL + 'games/ranking',
    gameLogsApi: APP_API_URL + 'games/logs',
    getFeebackByInfoEl: (eiId) => {
        return `${APP_API_URL}manager/${eiId}/feedbacks`
    },

    getPlayerApi: APP_API_URL + 'players',

}

export default endpoint;

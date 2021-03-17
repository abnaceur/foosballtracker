require('dotenv').config();

const APP_API_URL = process.env.REACT_APP_API_URL;

const endpoint = {
    
    addNewPlayerApi: APP_API_URL + 'players/add',
    addNewGameApi: APP_API_URL + 'games/add',
    
    getFeebackByInfoEl: (eiId) => {
        return `${APP_API_URL}manager/${eiId}/feedbacks`
    },

    getPlayerApi: APP_API_URL + 'players',

}

export default endpoint;

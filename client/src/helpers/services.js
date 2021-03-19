import endpointAPI from '../helpers/api';
import axios from 'axios';

export const createPlayer = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.addNewPlayerApi;

        axios.post(url, {data})
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};


export const getPlayers = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.getPlayerApi;

        axios.get(url)
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};


export const createGame = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.addNewGameApi;

        axios.post(url, {data})
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};

export const getGameStats = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.gameStataApi;

        axios.post(url, {data})
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};

export const getGameRanking = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.gameRankApi;

        axios.post(url, {data})
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};

export const getGameLogs = (data) => {
    return new Promise((resolve, reject) => {
        let url = endpointAPI.gameLogsApi;

        axios.post(url, {data})
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                return Promise.reject(err);
            });

    })
};

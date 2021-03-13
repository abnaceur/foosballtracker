import endpointAPI from '../../helpers/api';
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


import tokenService from './tokenService';

const BASE_URL = '/api/subscriptions';

export default {
    create
}

function create(email) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(email)
    }).then(res => res.json());
}
const BASE_URL = '/api/subscriptions';

export default {
    create
}

function create(email) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(email)
    }).then(res => res.json());
}
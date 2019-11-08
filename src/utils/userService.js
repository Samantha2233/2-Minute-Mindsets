import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
    console.log('signup in userService called');
    console.log('user in userService', user);
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    })
        .then(res => {
            console.log('response in userService', res);
            if (res.ok) {
                return res.json();
            } else {
                throw Error(`Request rejected with status ${res.status}`);
            }
            // Probably a duplicate email
            // throw new Error('Email already taken!');
        })
        // Parameter destructuring!
        .then(({ token }) => { tokenService.setToken(token); })
    // .catch(console.error)
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout() {
    tokenService.removeToken();
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(creds)
    })
        .then(res => {
            // Valid login if we have a status of 2xx (res.ok)
            if (res.ok) return res.json();
            throw new Error('Bad Credentials!');
        })
        .then(({ token }) => tokenService.setToken(token));
}

export default {
    signup,
    getUser,
    logout,
    login
};
import { MAIN_URL, groupId } from './config';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        login (credentials) {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: this.token }),
            })
        },
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                },
            })
        },       
    },
    posts: {
        fetch () {
            console.log(this.token);
            return fetch(`${MAIN_URL}/feed`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method: 'POST',
                headers: {
                    Authorization: this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment })
            })
        },
    },
};
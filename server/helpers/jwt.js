const {expressjwt: jwt} = require('express-jwt');

function authJwt() {
    const secret = 'GFE';
    const api = '';
    return jwt({
        secret: secret,
        algorithms: ['HS256']
    }).unless({
        path: [
            {url: /products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /categories(.*)/, methods: ['GET', 'OPTIONS']},

            {url: /(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`,
            `${api}/`,

        ]
    })
}

module.exports = authJwt
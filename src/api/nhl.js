const axios = require('axios');

const instance = axios.create({
    baseURL: "https://statsapi.web.nhl.com/api/v1/"
})

exports.nhlAPI = instance;
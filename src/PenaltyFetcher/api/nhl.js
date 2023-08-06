const axios = require('axios');

const instance = axios.create({
    baseURL: "https://statsapi.web.nhl.com/"
})


module.exports = instance;
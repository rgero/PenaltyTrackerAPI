import axios from 'axios';

const instance = axios.create({
    baseURL: "https://statsapi.web.nhl.com/api/v1/"
})

export default instance;
const { default: axios } = require("axios");

const apiKey = process.env.NEXTP_PULBIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: { 
        Authorization: `Bearer ${apiKey}`
     }
});



export default axiosClient;
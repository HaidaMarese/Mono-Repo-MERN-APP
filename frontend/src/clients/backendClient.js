import axios from 'axios';


export const backendClient = axios.create({
    baseURL: `http://localhost:10000/api`,
});
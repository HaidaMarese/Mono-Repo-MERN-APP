import axios from 'axios';


export const backendClient = axios.create({
    baseURL: `http://localhost${import.meta.env.PORT}/api`,
});
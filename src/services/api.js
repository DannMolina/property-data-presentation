import axios from 'axios';

/**
 * @config API config
 * @param baseURL: http://localhost:8000/api/
 */
export const api = axios.create({
    baseURL: `http://localhost:8000/api/`,
});

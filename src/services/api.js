import axios from 'axios';
import { base_URL } from './baseURL'

const api = axios.create({
    baseURL: base_URL,
})

export { api };
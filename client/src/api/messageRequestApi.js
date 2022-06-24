import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})


export const getMessasges = (id) => api.get(`/message/${id}`)
export const createMessage = (data) => api.post('/message/', data)
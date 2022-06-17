import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})


export const uploadImage = (formData) => api.post('/upload/',formData)
export const uploadPost = (formData) => api.post('/post/',formData)
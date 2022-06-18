import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})


export const getUser = (id) => api.get(`/user/find/${id}`)
export const getAllUser = () => api.get("/user/")
export const updateUser = (id, formData) => api.put(`/user/${id}`, formData)
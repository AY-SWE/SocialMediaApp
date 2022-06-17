import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})


export const getTimelinePost = (id) => api.get(`/post/findTimeLine/${id}`)
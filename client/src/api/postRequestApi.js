import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})


export const getTimelinePost = (id) => api.get(`/post/findTimeLine/${id}`)
export const likeDislikePost = (id, userId) => api.put(`/post/likeDislike/${id}`, {userId: userId}) //userId will be in the req.body, id will be req.params.id, matches server side 
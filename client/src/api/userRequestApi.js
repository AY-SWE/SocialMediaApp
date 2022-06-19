import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:5000',
})

api.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`       //Bearer is a string part that will return this whole thing as ana array of two elements, which is what we want on the server side
        
    }
    return req;
})

export const getUser = (id) => api.get(`/user/find/${id}`)
export const getAllUser = () => api.get("/user/")
export const updateUser = (id, formData) => api.put(`/user/${id}`, formData)
export const followUser = (id, formData) => api.put(`/user/follow/${id}`, formData)
export const unfollowUser = (id, formData) => api.put(`/user/unfollow/${id}`, formData)
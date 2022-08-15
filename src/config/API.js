import axios from 'axios'


const API = axios.create({
    baseURL: 'https://me-vote-backend.vercel.app'
})


export default API
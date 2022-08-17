import axios from 'axios'


const API = axios.create({
    baseURL: 'https://me-vote.herokuapp.com' 
})


export default API
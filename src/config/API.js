import axios from 'axios'


const API = axios.create({
    baseURL: 'https://me-vote.herokuapp.co' 
})


export default API
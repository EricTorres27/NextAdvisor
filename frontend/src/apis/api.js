import axios from 'axios';


export default axios.create({
    baseURL: window.baseURL,
    headers: {'Accept': 'application/json'}
})
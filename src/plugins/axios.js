import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:8505/api/'
axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    config.headers['Content-Type'] = 'application/ld+json'
     config.baseURL = 'http://localhost:8505/api/';

    return config;
})

export {axios as client};
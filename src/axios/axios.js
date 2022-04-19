import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://prueba-maquetacion.test',
})

export default axiosInstance
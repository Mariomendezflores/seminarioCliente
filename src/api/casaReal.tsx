import axios from "axios";

const baseURL = 'http://192.168.0.20:8000/api';
const casaRealApi = axios.create({baseURL});

export default casaRealApi;
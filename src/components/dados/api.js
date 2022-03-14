import axios from "axios";

const api = axios.create({
    baseURL: "https://talentonatoapi.herokuapp.com/usuarios",
});
export default api;
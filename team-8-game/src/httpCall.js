import axios from "axios";

export async function httpCall(url, body) {
    const res = await axios.post(`http://localhost:8080/signup`, body);
    return res.data;

}
import axios from "axios";

export async function httpCall(url, body) {
    const res = await axios.post(`http://localhost:3000/${url}`, body);
    return res.data;

}
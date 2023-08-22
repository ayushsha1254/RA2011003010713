import axios from "axios";

// const TOKEN = process.env.REACT_APP_TOKEN
console.log(process.env.REACT_APP_TOKEN);

const axiosInstance = axios.create({
  baseURL: "http://20.244.56.144",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

export default axiosInstance;

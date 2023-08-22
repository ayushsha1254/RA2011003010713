import axios from "axios";

// const TOKEN = process.env.REACT_APP_TOKEN
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTY3MjksImNvbXBhbnlOYW1lIjoiV2VzdHNpZGUiLCJjbGllbnRJRCI6IjA3YWQ2YTc0LWMxMWYtNDc3YS1iODBjLWVkZjM2MGRiODJkYyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJSQTIwMTEwMDMwMTA3MTMifQ.mc3rXsAmI-oyvTVSKioMBloT_rgx3YjTuUi77hv_PYo";
// adding here as the token keeps expiring
// console.log(process.env.REACT_APP_TOKEN);

const axiosInstance = axios.create({
  baseURL: "http://20.244.56.144",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default axiosInstance;

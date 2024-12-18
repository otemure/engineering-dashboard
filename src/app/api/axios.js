import axios from "axios";

const client = axios.create({
  baseURL: "https://freetestapi.com/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;

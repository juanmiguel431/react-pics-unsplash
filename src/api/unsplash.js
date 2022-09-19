import axios from "axios";

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': 'Client-ID shSjqNTe8M1pW8iXI-rP8eJr9CZh02HmuoHn9YNokjc',
    'Accept-Version': 'v1'
  },
});

export default unsplash;

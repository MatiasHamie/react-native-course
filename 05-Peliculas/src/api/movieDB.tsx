import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '103e0c03d74747143cbff75713fbbd62',
    language: 'es-ES',
  },
});

export default movieDB;

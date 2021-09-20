import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {IMovieDBNowPlaying, Movie} from '../interfaces/IMovieDB';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<IMovieDBNowPlaying>('/now_playing');
    setMoviesNowPlaying(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};

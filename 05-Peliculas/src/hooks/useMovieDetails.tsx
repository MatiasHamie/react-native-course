import {useCallback, useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/ICredits';
import {MovieCompleteData} from '../interfaces/IMovieDB';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieCompleteData;
}

export const useMovieDetails = (movieId: number): MovieDetails => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = useCallback(async () => {
    const movieDetailsPromise = await movieDB.get<MovieCompleteData>(
      `/${movieId}`,
    );
    const creditsPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsPromiseResponse, creditsPromiseResponse] =
      await Promise.all([movieDetailsPromise, creditsPromise]);

    setState({
      isLoading: false,
      movieFull: movieDetailsPromiseResponse.data,
      cast: creditsPromiseResponse.data.cast,
    });
  }, [movieId]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return {...state};
};

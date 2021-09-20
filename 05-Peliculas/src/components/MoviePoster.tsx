import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../interfaces/IMovieDB';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 420,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

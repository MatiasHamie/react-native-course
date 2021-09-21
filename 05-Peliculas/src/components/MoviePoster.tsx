import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/IMovieDB';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <View style={{...styles.cardContainer, width: width, height: height}}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 420,
    marginHorizontal: 8,
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

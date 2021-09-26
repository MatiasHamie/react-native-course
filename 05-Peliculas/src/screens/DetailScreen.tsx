import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {height: windowHeight} = useWindowDimensions();
  const {movieFull, cast, isLoading} = useMovieDetails(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(movie.id);

  return (
    <>
      {/* Botón para regresar */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={80} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{...styles.imageContainer, height: windowHeight * 0.7}}>
          <View style={styles.imageBorder}>
            <Image source={{uri}} style={styles.posterImage} />
          </View>
        </View>
        <View style={styles.marginContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size={30} color="grey" />
        ) : (
          <MovieDetails movieCompleteData={movieFull!} cast={cast} />
        )}
        {/* Boton para cerrar */}
        <Icon color="white" name="arrow-back-outline" size={100} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageContainer: {
    width: '100%',
    height: 400,
  },
  posterImage: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 10,
  },
});

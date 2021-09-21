/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';

export const HomeScreen = () => {
  const {nowPlaying, topRated, upcoming, popular, isLoading} = useMovies();
  const {width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 470}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            horizontal={true}
            itemWidth={300}
            sliderWidth={width}
          />
        </View>

        <HorizontalSlider movies={upcoming} title="Proximamente" />
        <HorizontalSlider movies={popular} title="Populares" />
        <HorizontalSlider movies={topRated} title="Mejores puntuadas" />
      </View>
    </ScrollView>
  );
};

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/ICredits';
import {MovieCompleteData} from '../interfaces/IMovieDB';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieCompleteData: MovieCompleteData;
  cast: Cast[];
}

export const MovieDetails = ({movieCompleteData, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />

          <Text> {movieCompleteData.vote_average} </Text>

          <Text style={{marginLeft: 5}}>
            - {movieCompleteData.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{marginTop: 10, fontSize: 23, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{marginTop: 10, fontSize: 15}}>
          {movieCompleteData.overview}
        </Text>
        <Text style={{marginTop: 10, fontSize: 23, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{marginBottom: 10, fontSize: 18}}>
          {currencyFormatter.format(movieCompleteData.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 23,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

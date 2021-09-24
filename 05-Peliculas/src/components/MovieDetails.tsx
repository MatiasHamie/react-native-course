import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/ICredits';
import {MovieCompleteData} from '../interfaces/IMovieDB';
import currencyFormatter from 'currency-formatter';

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
    </>
  );
};

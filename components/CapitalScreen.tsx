import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const CapitalScreen = ({route}: any) => {
  const [weatherInfo, setWeatherInfo] = useState<any>([]);
  const [weatherApiError, setWeatherApiError] = useState<Boolean>(false);

  const CAPITAL = route.params.capitalName;

  const capitalApi = axios.create({
    baseURL: 'https://api.openweathermap.org/',
  });
  const getWeatherDetails = () => {
    capitalApi
      .get(
        `data/2.5/weather?q=${CAPITAL}&units=metric&appid=0077e54dc3327d52d5ee64c5530ae63e`,
      )
      .then((response: any) => setWeatherInfo(response.data))
      .catch((error: any) => setWeatherApiError(true));
  };

  useEffect(() => {
    getWeatherDetails();
  }, []);

  console.log('Weather Data :', weatherInfo);

  return (
    <View>
      <Text style={styles.capitalDetailsText}>Capital Weather Details</Text>
      <Text style={styles.capitalText}> {CAPITAL} </Text>
      {weatherApiError && <Text> Data Not Found..</Text>}
      <Text style={styles.text}>
        Temperature : {weatherInfo?.main?.temp} °C
      </Text>
      <Text style={styles.text}>Humidity: {weatherInfo?.main?.humidity}</Text>

      <Text style={styles.text}>Wind Speed : {weatherInfo?.wind?.speed}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Image: {
    height: 25,
    width: 35,
    margin: 30,
    padding: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#191970',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 9,
    padding: 2,
    margin: 1,
    borderBottomWidth: 2,
    paddingBottom: 10,
    backgroundColor: '#f5fffa',
  },
  capitalDetailsText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'darkblue',
    padding: 10,
  },

  capitalText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    margin: 20,
    padding: 10,
  },

  errorText: {color: 'red', fontSize: 15, padding: 20, margin: 20},
});

export default CapitalScreen;

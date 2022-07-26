import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import axios from 'axios';

const CountryScreen = ({route, navigation}: any) => {
  const [countryInfo, setCountryInfo] = useState<any>();
  const [countryApiError, setCountryApiError] = useState<Boolean>(false);

  const COUNTRY = route.params.country;

  const countryApi = axios.create({
    baseURL: 'https://restcountries.com',
  });

  const getCountryData = () => {
    countryApi
      .get(`v3.1/name/${COUNTRY}`)
      .then((response: any) => setCountryInfo(response.data))
      .catch((error: any) => setCountryApiError(true));
  };

  useEffect(() => {
    getCountryData();
  }, []);

  const capitalNavigation = (capitalName: string) => {
    navigation.navigate('Capital', {capitalName});
  };

  console.log('country data  :', countryInfo);

  return (
    <View style={styles.Container}>
      <Text style={styles.countryDetailsText}> Country Details</Text>
      <Text style={styles.countryText}> {COUNTRY} </Text>

      {countryApiError && (
        <Text style={styles.errorText}>
          Please Enter a valid Country Name..
        </Text>
      )}

      <FlatList
        data={countryInfo}
        renderItem={({item}: any) => {
          return (
            <View>
              <Text style={styles.text}>
                Capital : <Text> {item.capital} </Text>
              </Text>
              <Text style={styles.text}> Population : {item.population} </Text>
              <Text style={styles.text}> Latitude : {item.latlng[0]}</Text>
              <Text style={styles.text}> Longitude : {item.latlng[1]}</Text>

              <Text style={styles.text}>
                Flag :
                <Image style={styles.Image} source={{uri: item.flags.png}} />
              </Text>
              <Button
                mode="contained"
                theme={{colors: {primary: '#00aaff'}}}
                style={{margin: 100}}
                onPress={() => capitalNavigation(item.capital[0])}>
                <Text style={{color: 'white'}}> Capital Weather </Text>
              </Button>
            </View>
          );
        }}
        keyExtractor={(item: any) => Math.random().toString(10)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },

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

  countryDetailsText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'darkblue',
    padding: 10,
  },

  countryText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    margin: 20,
    padding: 10,
  },

  errorText: {color: 'red', fontSize: 15, padding: 20, margin: 20},
});

export default CountryScreen;

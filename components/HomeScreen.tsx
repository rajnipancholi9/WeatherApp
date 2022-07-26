import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = ({navigation}: any) => {
  const [country, setCountry] = useState<any>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Country"
        value={country}
        onChangeText={text => setCountry(text)}
        placeholderTextColor="skyblue"
      />

      <Button
        mode="contained"
        disabled={!country}
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 100}}
        onPress={() => navigation.navigate('Country', {country})}>
        <Text style={{color: 'white'}}> Submit </Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 16,
    padding: 8,
    margin: 20,
    width: 350,
    height: 50,
  },
});

export default HomeScreen;

import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}></Image>
      <TextInput maxLength={5} style={styles.textInput} placeholder="Usuario"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80
  },
  textInput:{
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    textAlign: 'center'
  }
});

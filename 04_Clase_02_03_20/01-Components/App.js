import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () =>{Alert.alert("Hola Cesde")};
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}></Image>
      <TextInput maxLength={5} style={styles.textInput} placeholder="Usuario" onChangeText={(text)=>setName(text)}></TextInput>
      <Button title="Start" onPress={saludo}></Button>
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
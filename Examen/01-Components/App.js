/*CUADROS*/
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}>
          <Text style={styles.text}>Texto</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Texto</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box5}>
          <Text style={styles.text}>Texto</Text>
        </View>
        <View style={styles.box6}>
          <Text style={styles.text}>Texto</Text>
        </View>
      </View>
      <View style={styles.box7}>
        <View style={styles.box8}>
          <Text style={styles.text}>Texto</Text>
        </View>
        <View style={styles.box9}>
          <Text style={styles.text}>Texto</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text:{
    color: '#000000',
    textAlign:"center"
  },
  box1:{
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 10,
    padding: 10
    
  },
  box2:{
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 10,
    padding: 10
  },
  box3:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#d50000',
    backgroundColor: '#FFFF33',
    justifyContent: 'space-around',
    marginBottom: 10,
    right: 5
  },
  box4:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#37474f',
    backgroundColor: '#3364FF',
    justifyContent: 'space-around',
    marginBottom: 10,
    left: 5
  },
  box5:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#aa00ff',
    backgroundColor: '#FF3C33',
    justifyContent: 'space-around',
    marginBottom: 10,
    right: 5
  },
  box6:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#ff3d00',
    backgroundColor: '#3e2723',
    justifyContent: 'space-around',
    marginBottom: 10,
    left: 5
  },
  box7:{
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 10,
    padding: 10
  },
  box8:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#ffd600',
    backgroundColor: '#00c853',
    justifyContent: 'space-around',
    marginBottom: 10,
    right: 5
  },
  box9:{
    flex: 0.5,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#283593',
    backgroundColor: '#00e5ff',
    justifyContent: 'space-around',
    marginBottom: 10,
    left: 5
  }
});*/


/*LOGIN*/
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () =>{Alert.alert("Hola Cesde")};
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}></Image>
      <View style = {styles.textCompany}>
        <Text>COMPANY NAME</Text>
      </View>
      <TextInput maxLength={5} style={styles.textInput} placeholder="Email" onChangeText={(text)=>setName(text)}></TextInput>
      <TextInput maxLength={5} style={styles.textInput} placeholder="Password" onChangeText={(text)=>setName(text)}></TextInput>
      <View style={styles.button}>
      <Button color="#616161" title="GET STARTED" onPress={saludo}></Button>
    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 50,
    justifyContent: 'flex-start',
    justifyContent: 'space-around',
    marginBottom: 100,
  },
  textInput:{
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    textAlign: 'left',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    textAlign: 'left',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  textCompany:{
    borderColor: '#ffffff',
    width: 300,
    textAlign: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  }

});
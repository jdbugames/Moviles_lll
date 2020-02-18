import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Vista 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Vista 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Vista 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  text:{
    color: '#ff1744'
  },
  box1:{
    flex: 1,
    backgroundColor: '#ffff00'
  },
  box2:{
    flex: 1,
    backgroundColor: '#2979ff'
  },
  box3:{
    flex: 1,
    backgroundColor: '#d50000'
  }
});

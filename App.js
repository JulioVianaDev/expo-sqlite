import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useState } from 'react';
export default function App() {
  const db = SQLite.openDatabase('example.db');
  const [isLoading,setIsLoading] = useState(true);
  const [names,setNames] = useState([]);
  const [currentName,setCurrentName] = useState(undefined);

  if (isLoading){
    return(
      <View style={styles.container}>
        <Text>Carregando nomes!</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});

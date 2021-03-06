import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';
// import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
         <Header />
         <CarsList />
      {/* <CarItem 
      name="Model S"
      tagline="Order online for"
      taglineCTA="Touchless Delivery"
      image={ require('./assets/images/ModelX.jpeg')}
      /> */}
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

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import PrayerCards from './components/PrayerCards';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <PrayerCards />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 15,
    flex: 1,
      flexDirection: 'column',
    backgroundColor: '#fff'
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <Card
              title='Fajr'>
              <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>

          <Card
              title='Duhr'>
              <Text style={{marginTop: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>

          <Card
              title='Asr'>
              <Text style={{marginTop: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>

          <Card
              title='Magrib'>
              <Text style={{marginTop: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>

          <Card
              title='Isha'>
              <Text style={{marginTop: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>

          <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15}}
              title='Refresh' />


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

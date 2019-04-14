import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class AlarmsScreen extends React.Component {
  static navigationOptions = {
    title: 'Alarms',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
         <Text style={styles.getStartedText}>This is where alarms go.</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

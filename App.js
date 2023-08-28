import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import MyNavigationContainer from './components/NavigationContainer';
import Header from './components/Header';

const App = () => {

  return (
    <View style={styles.container}>
      <Header />
      <MyNavigationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  language:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
});

export default App;

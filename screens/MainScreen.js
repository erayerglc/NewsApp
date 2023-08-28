import { View, Text, Button, Image,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import News from '../components/News';

function MainScreen({ navigation }) {


    return (
      <SafeAreaView style={styles.container}>
        <News/>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
});

export default MainScreen
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NewsContent from './NewsContent';
import NewsData from './NewsData'; 
import Footer from './Footer';

const News = () => {
  return (
    <ScrollView style={styles.container}>
      {NewsData.map(haber => (
        <NewsContent key={haber.id} haber={haber} />
      ))}
      <View style={styles.footerContainer}>
        <Footer/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  footerContainer: {
    marginTop: 80,
  },
});

export default News;

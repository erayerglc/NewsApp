import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import '../Lang/i18n';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const AboutHitatek = () => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/aboutUs.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{t('companyName')}</Text>
          <Text style={styles.boldText}>{t('AboutHitatek')}</Text>
           <Text style={styles.boldText}>{t('AboutHitatek2')}</Text> 
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 80,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: windowHeight* 30/100,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 16,
    marginTop: 10,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'
  }
});

export default AboutHitatek;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LanguageButton from '../components/LanguageButton';


const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/hitatekLogo.png')}
        style={styles.image}
      />
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <LanguageButton lang="tr" />
          <LanguageButton lang="en" />
          <LanguageButton lang="ar" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 120,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
  },
  image: {
    width: 80,
    height: 60,
  },
});

export default Header;

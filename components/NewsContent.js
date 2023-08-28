import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import '../Lang/i18n';
import { useTranslation } from 'react-i18next';

const NewsContent = ({ haber }) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.haberContainer}>
      <View style={styles.haberResimContainer}>
        <Image source={haber.resim} style={styles.haberResim} resizeMode="contain" />
      </View>
      <Text style={styles.haberBaslik}>{t(haber.baslikKey)}</Text>
      <Text style={styles.haberDetay}>{t(haber.detay)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  haberContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  haberResimContainer: {
    width: '100%',
    maxWidth: 600, 
  },
  haberResim: {
    width: 'auto',
    height: 300, 
  },
  haberBaslik: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  haberDetay: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default NewsContent;

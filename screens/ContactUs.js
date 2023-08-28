import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import '../Lang/i18n';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/hitatekLogo.png')} style={styles.logo} />
      <Text style={styles.title}>{t('Contact')}</Text>
      <Text style={styles.address}>Üniversiteler Mah. 1596. Cad. Hacettepe 4. AR-GE A Blok Bina No:95/A Kat 1 No:45</Text>
      <Text style={styles.address}>Çankaya/ANKARA 06800</Text>
      <Text style={styles.companyName}>Hitatek Yazılım ve Bilişim Sistemleri Ltd. Şti.</Text>
      <Text style={styles.phoneNumber}>{t('Phone')}</Text>
      <Text style={styles.email}>email: iletisim@hitatek.com</Text>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF', 
  },
  address: {
    marginBottom: 5,
    fontSize: 16,
  },
  companyName: {
    marginTop: 20,
    fontSize: 18,
    color: '#555', 
  },
  phoneNumber: {
    marginTop: 20,
    fontSize: 18,
    color: '#555', 
  },
  email: {
    marginTop: 20,
    fontSize: 18,
    color: '#555', 
  },
});

export default ContactUs;

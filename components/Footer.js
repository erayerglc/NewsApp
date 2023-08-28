import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import '../Lang/i18n';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.footer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(t('Main'))}>
          <Text style={styles.buttonText}>{t('Main')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(t('AboutHita'))}>
          <Text style={styles.buttonText}>{t('AboutHita')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(t('Contact'))}>
          <Text style={styles.buttonText}>{t('Contact')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalText}>{t('companyName')}</Text>
        <Text style={styles.additionalText}>&copy; 2023 All Rights Reserved</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  additionalTextContainer: {
    alignItems: 'center',
  },
  additionalText: {
    fontSize: 12,
    color: 'white',
  },
  buttonText: {
    color: 'white',
  }
});

export default Footer;

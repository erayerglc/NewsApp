import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageButton = ({ lang }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(lang);
  };

  return (
    <TouchableOpacity onPress={handleLanguageChange} style={styles.button}>
      <Text style={styles.buttonText}>{lang.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 6,
    margin: 1,
    minWidth: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default LanguageButton;

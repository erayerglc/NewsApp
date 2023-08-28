import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import ContactUs from '../screens/ContactUs';
import AboutHitatek from '../screens/AboutHitatek';
import '../Lang/i18n';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

const MyNavigationContainer = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main" screenOptions={{ headerTitle: "" }} >
        <Drawer.Screen name={t('Main')} component={MainScreen} />
        <Drawer.Screen name={t('AboutHita')} component={AboutHitatek} />
        <Drawer.Screen name={t('Contact')} component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigationContainer;

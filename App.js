import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Find from './screens/week1/Find';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/week1/BottomTab';
import Restaurant from './components/week2/Restaurant';




export default function App() {
  return (
     
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
    
   

  );
}

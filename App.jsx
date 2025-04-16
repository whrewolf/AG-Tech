import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router'; // Pastikan router menggunakan komponen terkait ukiran

export default function App() {
  return (
    <NavigationContainer>
      <Router />{' '}
      {/* Pastikan Router sudah mengarah ke komponen-komponen terkait ukiran */}
    </NavigationContainer>
  );
}

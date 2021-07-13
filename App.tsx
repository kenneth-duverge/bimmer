import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Shrikhand_400Regular } from '@expo-google-fonts/shrikhand';

import StoreProvider from './src/store';

import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Shrikhand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}

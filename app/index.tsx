import React, {useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar, SafeAreaView, Platform } from 'react-native';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from "@expo-google-fonts/roboto";

import theme from "../src/theme";

import { Loading } from "@components/Loading";

import { Routes } from "../src/routes";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    StatusBar.setBarStyle('dark-content'); // Configura o estilo do conteúdo da StatusBar
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#202024'); // Configura a cor de fundo no Android
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
          { fontsLoaded ? <Routes /> :<Loading/>}
      </ThemeProvider>
    </SafeAreaView>
  )
}

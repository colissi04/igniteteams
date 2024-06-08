import React, {useState, useEffect} from "react";
import type { StatusBarStyle } from "react-native"
import { ThemeProvider } from "styled-components/native";
import { StatusBar, SafeAreaView } from 'react-native';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from "@expo-google-fonts/roboto";

import theme from "../src/theme";

import { Groups } from '@screens/Groups';
import { Loading } from "@components/Loading";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    StatusBar.setBarStyle('light-content'); 
    StatusBar.setBackgroundColor('#202024'); 
  }, []); 

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
          { fontsLoaded ? <Players /> :<Loading/>}
      </ThemeProvider>
    </SafeAreaView>
  )
}

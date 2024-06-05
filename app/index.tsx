import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from "@expo-google-fonts/roboto";

import theme from "../src/theme";

import { Groups } from '@screens/Groups';
import { Loading } from "@components/Loading";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_600}
        />
        { fontsLoaded ? <Groups /> :<Loading/>}
      </ThemeProvider>
    </SafeAreaView>
  )
}

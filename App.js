import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from "styled-components";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


import { theme } from './src/infrastructure/theme'
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants-screen";
import { Test } from "./src/features/restaurants/screens/test";

export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  let [latoLoaded] = useLato({
    Lato_400Regular,
  })
  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  const Tab = createBottomTabNavigator();
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Test} />
            <Tab.Screen name="Settings" component={Test} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
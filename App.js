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
import { Ionicons } from "@expo/vector-icons";



// Nous parametrons nos icones en fonction du nom des "tab.screens"
// we settings our icons according to the name of "tab screens"

// We could do it like this :
// let iconName;
// switch (route.name) {
//   case "Restaurants":

//     (Si on changeait d'icone en fonction de l'onglet sur lequel nous sommes
//     If we would change icon we are "focus" on:
//     iconName = focused ? 'mdr-restaurant' : 'mdr-restaurant-outline';)

//     iconName = 'mdr-restaurant';
//     break;
//   case "Map":

//     (If we would change icon we are "focus" on:
//     iconName = focused ? 'md-map' : 'md-map-outline');

//     iconName = 'md-map';
//     break;
//   case "md-settings":

//    ( If we would change icon we are "focus" on:
//     iconName = focused ? 'md-settings' : 'md-settings-outline';)

//     iconName = 'setting';
//     break;
// }
// But the best way to simplify it, is like this : 
//set Icon Name
const TAB_ICON = {
  //route Name   icon Name 
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const CreateScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    // We hide Header
    headerShown: false
  }
}

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={CreateScreenOptions}
            tabBarOptions={{
              activeTintColor: 'cornflowerblue',
              inactiveTintColor: 'gray',
            }}
          >
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
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
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              // Nous parametrons nos icones en fonction du nom des "tab.screens"
              // we settings our icons according to the name of "tab screens"
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case "Restaurants":
                    // Si on changeait d'icone en fonction de l'onglet sur lequel nous sommes
                    // If we would change icon we are "focus" on:
                    //iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
                    iconName = 'ios-restaurant';
                    break;
                  case "Map":
                    // If we would change icon we are "focus" on:
                    //iconName = focused ? 'ios-map' : 'ios-map-outline';
                    iconName = 'ios-map';
                    break;
                  case "Settings":
                    // If we would change icon we are "focus" on:
                    //iconName = focused ? 'settings' : 'settings-outline';
                    iconName = 'settings';
                    break;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'cornflowerblue',
              tabBarInactiveTintColor: 'gray',

            })}
            options={{}}
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
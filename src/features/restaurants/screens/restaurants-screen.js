import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, Text, View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const SafeView = styled(SafeArea)`
  background: ${(props) => props.theme.colors.background.primary}
`;

export const RestaurantsScreen = () => {

  const [searchedText, setSearchedText] = useState();
  console.log(searchedText);

  return (
    <SafeView>
      <SearchContainer>
        <Searchbar onChangeText={setSearchedText} />
      </SearchContainer>
      <FlatList
        // data we give to Flatlist
        data={[{ name: 1 }, { name: 2 }]}
        // for each data, it will render this
        renderItem={() => <RestaurantInfoCard />}
        // give a key to each child
        keyExtractor={(item) => item.name}
        // These styles will be applied to the scroll view content container 
        contentContainerStyle={{ margin: 16 }}
      />


    </SafeView>
  )
};

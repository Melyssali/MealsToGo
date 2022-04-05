import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color:${(props) => props.theme.colors.background.primary};
`;

export const RestaurantsScreen = () => {

  const [searchedText, setSearchedText] = useState();
  console.log(searchedText);

  return (
    <SafeArea>

      <SearchContainer>
        <Searchbar onChangeText={setSearchedText} />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>

    </SafeArea>
  )
};

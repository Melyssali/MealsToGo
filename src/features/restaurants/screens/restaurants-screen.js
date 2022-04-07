import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area";

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;



export const RestaurantsScreen = () => {

  const [searchedText, setSearchedText] = useState();
  console.log(searchedText);

  return (
    <SafeArea>
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


    </SafeArea>
  )
};

import React from "react";
import styled from "styled-components/native";
import { Text, FlatList } from "react-native";
import { Card } from 'react-native-paper';


const CardContainer = styled(Card)`
    padding: ${(props) => props.theme.space[3]};
    borderRadius: 7px;
    background-color:${(props) => props.theme.colors.background.primary};
`;
const CardCover = styled(Card.Cover)`
    
    background-color:${(props) => props.theme.colors.background.primary}
`;

const Title = styled(Text)`
    padding: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.ui.primary};
`;




export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos =
        [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = "100 some random steet",
        isOpenNow = true,
        rating = '4',
        isClosedTemporarily
    } = restaurant;
    console.log(restaurant);

    return (
        // <FlatList >
        <CardContainer elevation={5} >
            <CardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </CardContainer>
        // </FlatList>
    );


};


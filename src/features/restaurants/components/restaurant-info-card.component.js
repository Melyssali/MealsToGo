import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, FlatList } from "react-native";
import { Card } from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
    color: black;

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
        <Card elevation={5} style={styles.cardStyle}>
            <Card.Cover key={name} source={{ uri: photos[0] }} />
            <Title style={styles.textCard}>{name}</Title>
        </Card>
        // </FlatList>
    );


};

const styles = StyleSheet.create({
    cardStyle: {
        padding: 15,
        borderRadius: 7,
    },

}); 
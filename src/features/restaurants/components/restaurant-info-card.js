import React from "react";
import { SvgXml } from "react-native-svg";

// we import our variables for spacing and text
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";

//import SVG
import stars from "../../../../assets/stars";
import iconrestaurant from "../../../../assets/iconrestaurant";

// we import our style
import {
    CardContainer,
    CardCover,
    Info,
    Address,
    Section,
    OpenIcon,
    StarsIcon,
    Icon
} from "./restaurant-style-card";


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos =
        [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = "100 some random steet",
        isOpenNow = true,
        rating = 3,
        isClosedTemporarily = true,
    } = restaurant;
    console.log(restaurant);

    // we create an Array from something who is not an array, then we can use
    //.map(), .reduce(), .sort() ect
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    console.log(ratingArray);

    return (
        // <FlatList >
        <CardContainer elevation={5} >
            <CardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <StarsIcon>
                        {ratingArray.map(() => (<SvgXml xml={stars} width={20} height={20} />))}
                    </StarsIcon>
                    <OpenIcon>
                        {isClosedTemporarily && (
                            <Text variant="error" >
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={iconrestaurant} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </OpenIcon>
                </Section>
                <Address>{address}</Address>
            </Info>
        </CardContainer>
        // </FlatList>
    );


};


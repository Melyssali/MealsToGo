import React from 'react';
import { View, Text } from "react-native";
import styled from "styled-components";

const Test1 = styled(View)`
    flex: 1
`;
const Test2 = styled(Text)`
    color: black
`;

export const Test = () => {
    return (
        <Test1>
            <Test2>test</Test2>
        </Test1>
    )
}
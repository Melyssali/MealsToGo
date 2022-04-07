import React from 'react';
import { View, Text } from "react-native";
import styled from "styled-components";
import { SafeArea } from '../../../components/utility/safe-area';

const Test1 = styled(View)`
    flex: 1
`;
const Test2 = styled(Text)`
    color: black
`;

export const Test = () => {
    return (
        <SafeArea>
            <Test2>test</Test2>
        </SafeArea>
    )
}
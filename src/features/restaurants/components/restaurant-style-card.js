import { Card } from 'react-native-paper';
import styled from "styled-components/native";

// we use "styled" instead of StyleSheet, then we can use CSS text, and
// give clear name to our variables

export const CardContainer = styled(Card)`
    padding: ${(props) => props.theme.space[3]};
    borderRadius: 7px;
    background-color:${(props) => props.theme.colors.background.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
    
    
`;
export const CardCover = styled(Card.Cover)`
    background-color:${(props) => props.theme.colors.background.primary}
    
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption}
    
`;
export const Section = styled.View`
    flex-direction : row;
    align-items: center;
    padding-top:${(props) => props.theme.space[2]};
    padding-bottom:${(props) => props.theme.space[2]};
`;

export const OpenIcon = styled.View`
    flex: 1;
    flex-direction : row;
    justify-content: flex-end;
`;

export const StarsIcon = styled.View`
    flex-direction : row;
`;

export const Icon = styled.Image`
    width: 15px; 
    height: 15px;
`;
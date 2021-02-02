import styled from 'styled-components';

export const Container = styled.View`
padding: 16px;
background-color: #fff;
height: 100%;
`;

export const InputSearch = styled.TextInput `
width: 90%;
height: 65px;
background-color: #f0f0f5;
align-items: center;
justify-content: center;
margin-top: 30px;
padding: 10px;
border: 1px solid orange;
border-radius: 10px;
`;

export const ContainerList = styled.FlatList`
margin-top: 20px;
width: 100%;
`;

export const ContainerInside = styled.TouchableOpacity `
background-color: #f0f0f5;
padding: 10px 20px;
margin: 10px 0px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
border: 1px solid orange;
border-radius: 10px;`

export const LeftList = styled.View `
flex-direction: row;
padding: 10px;
`;

export const ImageProduct = styled.Image`
width: 60px;
height: 60px;
border-radius: 20px;`;

export const RightList = styled.View``;

export const TextProduct = styled.Text `
font-size: 16px;
font-weight: bold;
color: #010106;
margin-bottom: 15px;`;

export const TextPrice = styled.Text `
font-size: 14px;
color: #010106;`;
import styled from 'styled-components'

export const HeaderDetails = styled.View `
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
height: 55px;
background-color: #ffffff;
padding: 16px;
`;

export const IconBack = styled.TouchableOpacity ``;

export const ContainerImage = styled.View `
flex-direction: row;
display: flex;
justify-content: center;
`;

export const TextDealPrice = styled.Text `
width: 60px;
height: 30px;
background-color: #EF661B;
text-align: center;
padding: 5px;
margin-top: 50px;
margin-right: 25px;

color: white;
font-size: 14px;
font-weight: bold;`;

export const ImageProduct = styled.Image`
width: 200px;
height: 180px;
background-color: blue;
margin-right: 60px;`;

export const ContainerInfos = styled.View `
margin: 0 auto;
padding-top: 20px;
background-color: #fff;
width: 100%;`;

export const TextProductHigh = styled.Text `
text-align: center;
font-size: 20px;
color: #293845;
margin-bottom: 10px;`;

export const ContainerDescription = styled.View `
margin: 0 auto;
width: 90%;
height: 175px;
display: flex;
justify-content: center;
align-items: center;

border: 1px solid #ccc;`;

export const TextDescription = styled.Text `
text-align: center;`;

export const ContainerPrices = styled.View `
flex-direction: row;
display: flex;
justify-content: space-evenly;
margin-bottom: 60px;
margin-top: 15px;`;

export const TextPrice = styled.Text `
font-size: 18px;
color: #293843;`;

export const ContainerIncrementProducts = styled.View `
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
background-color: #fff;`;

export const ButtonIncrement = styled.TouchableOpacity``;

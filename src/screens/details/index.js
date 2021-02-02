import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {
HeaderDetails,
IconBack,
ContainerImage,
TextDealPrice,
ImageProduct,
TextProductHigh,
ContainerDescription,
ContainerInfos,
TextDescription,
TextPrice,
ContainerPrices,
ContainerIncrementProducts,
ButtonIncrement 
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'

const DetailsScreen = ({route, navigation}) => {

    const data = route.params;


    const [products, setProducts] = useState([])


    useEffect(() => {
        const getApiId = async () => {
            const response = await api.get(`/items/${data.itemId}`)

            setProducts(response.data)
        }
        getApiId();
    },[])

    console.log(products, 'products')
    return (
       <>
       {products.price &&  
       <ScrollView>

        <HeaderDetails>
            <IconBack onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={22} color="#ccc"/>
            </IconBack>

            <IconBack>
                <Icon name="shopping-cart" size={22} color="black"/>
            </IconBack>
        </HeaderDetails>

        <ContainerImage>
            {products.price.percentage &&
            <TextDealPrice>
                -{products.price.percentage}%
            </TextDealPrice>}

            <ImageProduct source={{uri: `${products.images}`}}/>
        </ContainerImage>

        <ContainerInfos>
            <TextProductHigh>
                {products.name}
            </TextProductHigh>

            <ContainerDescription>
                <TextDescription>
                    {products.description}
                </TextDescription>
            </ContainerDescription>
        </ContainerInfos>

        <ContainerInfos>
            <TextProductHigh>Preço: </TextProductHigh>

            <ContainerPrices>
                <TextPrice>De R$ {products.price.originalPrice}</TextPrice>
                <TextPrice>Por R$ {products.price.dealPrice}</TextPrice>
            </ContainerPrices>

            <TextProductHigh>Total: R$ {products.price.dealPrice}</TextProductHigh>
        </ContainerInfos>

        <ContainerIncrementProducts>
            <ButtonIncrement>
            <Text style={{fontSize: 30}}>+</Text>
            </ButtonIncrement>

            <TextProductHigh>1</TextProductHigh>

            <ButtonIncrement>
            <Text style={{fontSize: 30}}>-</Text>
            </ButtonIncrement>
        </ContainerIncrementProducts>

        </ScrollView>}
       </>
    )
}

export default DetailsScreen;


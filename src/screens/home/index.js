import React, {useEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import NumberFormat from 'react-number-format';
import api from '../../services/api'
import 
    {InputSearch, 
    ContainerList, 
    Container,
    LeftList,
    TextPrice,
    TextProduct, 
    ImageProduct, 
    RightList,
    ContainerInside
} from './styles'

const HomeScreen = () => {

const navigation = useNavigation();

const [products, setProducts] = useState([])

useEffect(() => {
    const getApi = async () => {
        const response = await api.get('/items')
        setProducts(response.data.payload)
     
    }
    getApi()
},[])

console.log(products, 'products')

    return (
        <Container>
            <InputSearch placeholder="Busque o produto desejado!"/>

            <ContainerList 
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(({item}) => {
               return (
                   <>
                   {item.price && <ContainerInside onPress={() => navigation.navigate('Details', {
                       itemId: item.id
                   })} > 
                     <LeftList>
                        <ImageProduct source={{uri: `${item.images}`}}/>
                    </LeftList>

                    <RightList>
                        <TextProduct>{item.name} {item.price.percentage && 
                        <TextProduct>   -{item.price.percentage}%</TextProduct>}</TextProduct>
                        <TextPrice>R${item.price.originalPrice},00 {item.price.dealPrice && <TextPrice>por {item.price.dealPrice},00</TextPrice>}</TextPrice>
                    </RightList>
                   </ContainerInside>}
                   </>
               )
            })}
            />
        </Container>
    )
}

export default HomeScreen;


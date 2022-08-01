import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Carousel from 'react-native-snap-carousel';
import {View, StyleSheet, Image,Text,ActivityIndicator, Dimensions, FlatList,ScrollView, TouchableOpacity} from 'react-native';
import { useProductos } from '../../hooks/useProductos';

const { width } = Dimensions.get('window');

export const PaginaVehiculoNuevo = ()=> {

    const [state] = useProductos('https://milibido.com/api-mi-libido/controllers/productos?nuevos=true');

    if(state.load){
        return(
            <View style={{flex:1}}>
                <ActivityIndicator color="red" size={80} style={{flex:1}}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{marginTop:10,padding:5}}>
                <View>
                    <Carousel
                        layout={'default'}
                        loop={true}
                        autoplay={true}
                        data={state.data}
                        renderItem={({item}) => <Card uri={item.imagen} />}
                        sliderWidth={ width }
                        itemWidth={ 190 }
                    />
                </View>

                <View style={{height : 150,marginTop:10}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>Populares</Text>
                    <FlatList 
                        data={state.data}
                        renderItem={({item})=><Card uri={item.imagen} height={120} width={100}/>}
                        keyExtractor={(item)=>item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                    />
                </View>

                 <View style={{height : 150,marginTop:10}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>Populares</Text>
                    <FlatList 
                        data={state.data}
                        renderItem={({item})=><Card uri={item.imagen} height={120} width={100}/>}
                        keyExtractor={(item)=>item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                    />
                </View>

            </View>
        </ScrollView>
    )
}

interface PropsCard{
    uri:string,
    height?:number,
    width?:number
}

const Card = ({uri,height=280,width=180} : PropsCard)=>{

    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{width,height,marginHorizontal:5}} 
        //onPress={ ()=> navigation.navigate('Editar',) }
        >
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:10,
    },
    imageContainer:{
        flex : 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        
        elevation: 17,
        
    }
});
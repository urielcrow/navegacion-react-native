import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import PaginaVacia from '../screens/PaginaVacia';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorAvanzado = ()=> {
    return (
        <Drawer.Navigator
            drawerContent={(props)=><Menu {...props} />}
        >
           
            <Drawer.Screen name="StackNavigator" options={{ title:'home'}} component={StackNavigator} />
            <Drawer.Screen name="PaginaLimpia" options={{ title:'setting'}} component={PaginaVacia} />
        </Drawer.Navigator>
    )
}

const Menu = ( {navigation} : DrawerContentComponentProps)=>{
    return(
        <DrawerContentScrollView>
           <Avatar />
           <Opciones navigation={navigation}/>
           
        </DrawerContentScrollView>
    )
}

const Avatar = ()=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:150,height:150,borderRadius:100}}
                source={{
                    uri: 'https://i.pinimg.com/736x/de/bb/1b/debb1b3ddfbc5dd5dfd076fd00297946.jpg'
                }}
            />
        </View>
    )
}

const Opciones = ( {navigation } : any )=>{
    return(
        <View style={{margin:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('PaginaLimpia')}>
                <Text style={{fontSize: 25}}>
                    Opcion 1
                </Text>
            </TouchableOpacity>
        </View>
       
    )
}





import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PaginaVacia from '../screens/PaginaVacia';
import PaginaUsuariosScreen from '../screens/usuarios/PaginaUsuariosScreen';
import PaginaVehiculosScreen from '../screens/vehiculos/PaginaVehiculosScreen';
import PaginaPerfilScreen from '../screens/perfil/PaginaPerfilScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorAvanzado = ()=> {
    return (
        <Drawer.Navigator drawerContent={(props)=><Menu {...props} />}>
            <Drawer.Screen name="usuarios" options={{ title:'Usuarios'}} component={PaginaUsuariosScreen} />
            <Drawer.Screen name="perfil" options={{ title:'Mi perfil'}} component={PaginaPerfilScreen} />
            <Drawer.Screen name="vehiculos" options={{ title:'Vehículos'}} component={PaginaVehiculosScreen} />
            <Drawer.Screen name="vacia" options={{ title:'Pagina vacia'}} component={PaginaVacia} />
        </Drawer.Navigator>
    )
}

const Menu = ( {navigation} : DrawerContentComponentProps)=>{
    return(
        <DrawerContentScrollView>
           <Opciones navigation={navigation}/>
        </DrawerContentScrollView>
    )
}

const Name = ()=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}><Text>Uriel Alejandro Rosales</Text></View>
    )
}

const Avatar = ()=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:120,height:120,borderRadius:100}}
                source={{
                    uri: 'https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png'
                }}
            /> 
        </View>
    )
}

const Opciones = ( {navigation } : any )=>{
    return(
        <View>
            
            <TouchableOpacity onPress={()=>navigation.navigate('perfil')} style={{marginVertical:15}}>
                <Avatar />
                <Name />
            </TouchableOpacity>

            <View style={{padding:25}}>
                <TouchableOpacity onPress={()=>navigation.navigate('usuarios')} style={{marginVertical:15}}>
                    <Text style={{fontSize: 20}}>
                        <FontAwesome name="users" size={25}/> Usuarios
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('vehiculos')} style={{marginVertical:15}}>
                    <Text style={{fontSize: 20}}>
                        <FontAwesome name="truck" size={25}/> Vehículos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('vacia')} style={{marginVertical:15}}>
                    <Text style={{fontSize: 20}}>
                        <FontAwesome name="file-o" size={25}/> En blanco
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('vacia')} style={{marginVertical:15}}>
                    <Text style={{fontSize: 20}}>
                        <FontAwesome name="sign-out" size={25}/> Salir
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
       
    )
}





import React, { useContext } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PaginaVacia from '../screens/PaginaVacia';
import PaginaUsuariosScreen from '../screens/usuarios/PaginaUsuariosScreen';
import PaginaVehiculosScreen from '../screens/vehiculos/PaginaVehiculosScreen';
import {PaginaPerfilScreen} from '../screens/perfil/PaginaPerfilScreen';
import { AuthContext } from '../context/AuthContext';



const Drawer = createDrawerNavigator();

export const DrawerNavigatorAvanzado = ()=> {

    const { authState : {isLoggedIn},sigIn } = useContext(AuthContext);

    if(!isLoggedIn)
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Bienvenido</Text>
                <TouchableOpacity onPress={sigIn} style={{width:150,height:60,backgroundColor:'black',borderRadius:10,justifyContent:'center'}}>
                    <Text style={{color:'white',textAlign:'center'}}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
   
    return (
        <Drawer.Navigator drawerContent={ (props) => <Menu {...props} />}>
            <Drawer.Screen name="usuarios" options={{ title:'Usuarios'}} component={PaginaUsuariosScreen} />
            <Drawer.Screen name="perfil" options={{ title:'Mi perfil'}} component={PaginaPerfilScreen} />
            <Drawer.Screen name="vehiculos" options={{ title:'Vehículos'}} component={PaginaVehiculosScreen} />
            <Drawer.Screen name="vacia" options={{ title:'Pagina vacia'}} component={PaginaVacia} />
        </Drawer.Navigator>
    )
}

const Menu = ( {navigation} : DrawerContentComponentProps )=>{
    return(
        <DrawerContentScrollView>
           <Opciones navigation={navigation}/>
        </DrawerContentScrollView>
    )
}


const Name = ( {user}  : { user : string } )=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}><Text>{user}</Text></View>
    )
}

const Avatar = ()=>{

    const { authState : {userImg} } = useContext(AuthContext);

    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:120,height:120,borderRadius:100}}
                source={{
                    uri: userImg
                }}
            /> 
        </View>
    )
}


const Opciones = ( { navigation } :  any )=>{

    const { authState : {userName},sigOut } = useContext(AuthContext);

    return(
        <View>

            <TouchableOpacity onPress={()=>navigation.navigate('perfil')} style={{marginVertical:15}}>
                <Avatar />
                <Name user={userName} />
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
                <TouchableOpacity onPress={sigOut} style={{marginVertical:15}}>
                    <Text style={{fontSize: 20}}>
                        <FontAwesome name="sign-out" size={25}/> Salir
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
       
    )
}





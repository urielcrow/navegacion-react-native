import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PaginaUsuarioNuevo from '../screens/usuarios/PaginaUsuarioNuevo';
import PaginaUsuariosEditar from '../screens/usuarios/PaginaUsuariosEditar';



const Tab = createMaterialTopTabNavigator();

export const TopNavigatorUsuarios = ()=> {

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarPressColor: 'black',
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                },
                tabBarIcon: ({color}) => {
                    let iconName: string = '';
                    switch (route.name) {
                      case 'Nuevo':
                        iconName = 'plus-circle';
                        break;
                      case 'Editar':
                        iconName = 'pencil-square-o';
                        break;
                    }
                    return <FontAwesome name={iconName} size={25} style={{color}}/>;
                  },
            })}
        >
            <Tab.Screen name="Nuevo" options={{ title:"NUEVO" }} component={PaginaUsuarioNuevo} />
            <Tab.Screen name="Editar" options={{ title:"EDITAR" }} component={PaginaUsuariosEditar} />
        </Tab.Navigator>
    );
}


import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PaginaVehiculoNuevo } from '../screens/vehiculos/PaginaVehiculoNuevo';
import { PaginaVehiculosEditar } from '../screens/vehiculos/PaginaVehiculosEditar';

const Tab = createMaterialTopTabNavigator();

export const TopNavigatorVehiculos = ()=> {

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
            <Tab.Screen name="Nuevo" options={{ title:"NUEVO" }} component={PaginaVehiculoNuevo} />
            <Tab.Screen name="Editar" options={{ title:"EDITAR" }} component={PaginaVehiculosEditar} />
        </Tab.Navigator>
    );
}


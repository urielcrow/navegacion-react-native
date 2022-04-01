import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import PaginaVacia from '../screens/PaginaVacia';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{ title:'home'}} component={StackNavigator} />
            <Drawer.Screen name="PaginaLimpia" options={{ title:'setting'}} component={PaginaVacia} />
        </Drawer.Navigator>
    )
}



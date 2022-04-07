import React from 'react';
import { Text } from 'react-native';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Chat } from '../screens/Chat';
import { Contact } from '../screens/Contact';
import { Albums } from '../screens/Albums';

const Tab = createMaterialTopTabNavigator();

export const TopNavigator = ()=> {

    //const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            // style={{
            //     padding: top
            // }}
            screenOptions={({route}) => ({
                tabBarPressColor: 'black',
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                },
                // tabBarStyle: {
                //     //en ios es shadowColor:"transparent"
                //     shadowColor:"transparent",
                //     elevation: 0,
                //   },
                tabBarLabelStyle: {
                    //fontSize: 20 ,
                },
                tabBarStyle: {
                //paddingVertical: 30,
                // backgroundColor: 'white'
                },
                tabBarIconStyle: {
                    // flexDirection: 'row',
                    // justifyContent: 'center',
                },
                tabBarIcon: ({color}) => {
                    let iconName: string = '';
                    switch (route.name) {
                      case 'Chat':
                        iconName = 'commenting-o';
                        break;
                      case 'Contact':
                        iconName = 'plus-circle';
                        break;
                      case 'Albums':
                        iconName = 'pencil-square-o';
                        break;
                    }
                    return <FontAwesome name={iconName} size={25} style={{color}}/>;
                  },
            })}
        >
            <Tab.Screen name="Chat" options={{ title:"CHAT" }} component={Chat} />
            <Tab.Screen name="Contact" options={{ title:"NUEVO" }} component={Contact} />
            <Tab.Screen name="Albums" options={{ title:"EDITAR" }} component={Albums} />
        </Tab.Navigator>
    );
}


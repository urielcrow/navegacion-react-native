import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabScreen } from '../screens/TabScreen';
import { TabScreen2 } from '../screens/TabScreen2';
import { TabScreen3 } from '../screens/TabScreen3';
import { Text, Platform } from 'react-native';

export const TabsNavigator = ()=> {
  return Platform.OS === 'ios' ? TabsIOS() : TabsAndroid();
}

const TabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        //backgroundColor:'#ccc'
      }}
      screenOptions={ ({route}) =>({
        // tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        // tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'white',
          //elevation:0
        },
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarIcon: ({ focused, color}) => {
            let iconName;

            if (route.name === 'TabScreen') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'TabScreen2') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else{
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return<Text>T1</Text>
          }
    })}
    >
      <TabAndroid.Screen name="TabScreen" options={{ title:"Titulo tab 1" }} component={TabScreen} />
      <TabAndroid.Screen name="TabScreen2" options={{ title:"Titulo tab 2" }} component={TabScreen2} />
      <TabAndroid.Screen name="TabScreen3" options={{ title:"Titulo tab 3" }} component={TabScreen3} />
    </TabAndroid.Navigator>
  );
}

const TabIOS = createBottomTabNavigator();
const TabsIOS= ()=> {
  return (
    <TabIOS.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={ ({route}) =>({
        // tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        // tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'white',
          //elevation:0
        },
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TabScreen') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'TabScreen2') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else{
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            //return <Ionicons name={iconName} size={size} color={color} />;
            return<Text>T1</Text>
          }
    })}
  
    
    >
      <TabIOS.Screen name="TabScreen" options={{ title:"Titulo tab 1" }} component={TabScreen} />
      <TabIOS.Screen name="TabScreen2" options={{ title:"Titulo tab 2" }} component={TabScreen2} />
      <TabIOS.Screen name="TabScreen3" options={{ title:"Titulo tab 3" }} component={TabScreen3} />
    </TabIOS.Navigator>
  );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabScreen } from '../TabScreen';
import { TabScreen2 } from '../TabScreen2';
import { TabScreen3 } from '../TabScreen3';
import { Text, Platform } from 'react-native';


export const PaginaPerfilScreen = ()=> {
    return Platform.OS === 'ios' ? TabsIOS() : TabsAndroid();
}

const TabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      screenOptions={ ({route}) =>({
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'white',
        },
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarIcon: ({ focused, color}) => {
           return icons(route.name,focused);
          }
    })}
    >
      <TabAndroid.Screen name="TabScreen" options={{ title:"avatar" }} component={TabScreen} />
      <TabAndroid.Screen name="TabScreen2" options={{ title:"contraseña" }} component={TabScreen2} />
      <TabAndroid.Screen name="TabScreen3" options={{ title:"configuracion" }} component={TabScreen3} />
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
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'white',
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

const icons = ( name : string, focused : boolean )=>{
    let icon = "";
    let size;

    if (name === 'TabScreen') {
        icon = 'user';
        size = focused ? 25 : 20;
    }
    else if (name === 'TabScreen2') {
        icon = 'lock';
        size = focused ? 25 : 20;
    }
    else{
        icon = 'cog';
        size = focused ? 25 : 20;
    }
    return <FontAwesome name={icon} size={size} style={{color:'#fff'}}/>;
}

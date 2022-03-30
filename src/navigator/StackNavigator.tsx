import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

//Podemos definir desde este punto si la pagina recibe parametros o no
export type ParamsStack = {
  page1: undefined,
  page2: undefined,
  page3: undefined,
  page4: {id:number,name:string}
}

const Stack = createStackNavigator<ParamsStack>();

 export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle :{
          backgroundColor :'white'
        }
      }}
    >
      <Stack.Screen name="page1" options={{ title:"Titulo pag 1" }} component={Pagina1Screen} />
      <Stack.Screen name="page2" options={{ title:"Titulo pag 2" }} component={Pagina2Screen} />
      <Stack.Screen name="page3" options={{ title:"Titulo pag 3" }} component={Pagina3Screen} />
      <Stack.Screen name="page4" options={{ title:"Titulo pag 4" }} component={PersonaScreen} />
    </Stack.Navigator>
  );
}
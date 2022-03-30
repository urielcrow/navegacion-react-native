import React from 'react';
import { View, Text, Button } from 'react-native';
import {StackScreenProps}  from '@react-navigation/stack';

import {ParamsStack} from '../navigator/StackNavigator';

                                //configuracion stack,el nombre de la pagina definida en el stack
interface Props extends StackScreenProps<ParamsStack,'page4'>{}

// interface RouterParams {
//     id: number,
//     name : string
// }

export const PersonaScreen = ( {route,navigation} : Props) =>{

    // const params = route.params as RouterParams;

    React.useEffect(() => {
        navigation.setOptions({
            title : route.params.name
        })
    }, [])

    return (
        <View>
            <Text style={{fontSize: 30,textAlign:'center'}}>Persona screen</Text>
            
        </View>
    )
}

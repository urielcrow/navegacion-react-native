import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {StackScreenProps}  from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

export const Pagina1Screen = ( {navigation} : Props)=> {
    return (
        <View>
            <Text style={{fontSize: 30,textAlign:'center'}}>Pagina 1</Text>
            <Button
                title="to go page 2"
                onPress={()=>navigation.navigate('page2')}
            />

            <Text>Navigate with params</Text>
            <TouchableOpacity
                onPress={()=>navigation.navigate('page2')}
            >
                <Text>Uriel</Text>
            </TouchableOpacity>

             <Button
                title="ir persona"
                onPress={()=>navigation.navigate('page4',{
                    name:'Uriel',
                    age:37
                })}
            />
        </View>
    )
}

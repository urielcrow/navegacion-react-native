import React from 'react';
import { View, Text, Button } from 'react-native';
import {StackScreenProps}  from '@react-navigation/stack';
interface Props extends StackScreenProps<any,any>{}

export const Pagina3Screen = ( {navigation} : Props) =>{
    return (
        <View>
            <Text style={{fontSize: 30,textAlign:'center'}}>Pagina 3</Text>
            <Button
                title="to go page 2"
                onPress={()=>navigation.pop()}
            />

             <Button
                title="to go page 1"
                onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}

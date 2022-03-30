import React from 'react';
import { View, Text, Button } from 'react-native';
import {StackScreenProps}  from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

export const Pagina2Screen = ({navigation} : Props)=> {

    return (
        <View>
            <Text style={{fontSize: 30,textAlign:'center'}}>Pagina 2</Text>
            <Button
                title="to go page 3"
                onPress={()=>navigation.navigate('page3')}
            />
        </View>
    )
}

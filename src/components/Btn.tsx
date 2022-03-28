import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface Props{
    text:string,
    color?:string,
    backgroundColor:string,
    onPress : () => void,
    long?:boolean
}

export default function Btn({text,color="white",backgroundColor,onPress,long=false}:Props) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.7}
            style={{width: long ? 150 : 75,backgroundColor,borderRadius:100,padding:3,justifyContent:'center',alignItems:'center',margin:2,height:75}}
        >
            <Text style={{color,fontSize:30}}> {text} </Text>
        </TouchableOpacity>
    )
}

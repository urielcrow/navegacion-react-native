import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { styles } from '../theme/appTheme';
import Btn from '../components/Btn';

export const CalculadoraScreen = () => {

    const [stringValue, setStringValue] = React.useState("0");
    const [numberValue, setNumberValue] = React.useState(0);

    const operando = (n:number) =>{
        // const rest = Number(stringValue + n);
        setStringValue(stringValue + n.toString());
    }

    const respText = ()=>{

    }

    const operador = (op:string)=>{
        switch (op) {
            case '+':
            setStringValue(stringValue + "+");
            break;
            case '-':
                
            break;
            case '/':
                
            break;
            case 'x':
                
            break;
        
            default:

            break;
        }
    }


    return (
        <>
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={{color:'rgba(255,255,255,0.5)',fontSize:30,textAlign:'right'}}>{numberValue}</Text>
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{color:'white',fontSize:60,textAlign:'right'}}>{stringValue}</Text>
                <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                    <Btn text="C" color="black" backgroundColor="#ccc" onPress={()=>setStringValue("0")}/>
                    <Btn text="+/-" color="black" backgroundColor="#ccc" onPress={()=>operando(2)}/>
                    <Btn text="del" color="black" backgroundColor="#ccc" onPress={()=>operando(3)}/>
                    <Btn text="/" color="white" backgroundColor="orange" onPress={()=>operador('/')}/>
                </View>
                <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                    <Btn text="7" color="white" backgroundColor="#333" onPress={()=>operando(7)}/>
                    <Btn text="8" color="white" backgroundColor="#333" onPress={()=>operando(8)}/>
                    <Btn text="9" color="white" backgroundColor="#333" onPress={()=>operando(9)}/>
                    <Btn text="x" color="white" backgroundColor="orange" onPress={()=>operador('x')}/>
                </View>
                <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                    <Btn text="4" color="white" backgroundColor="#333" onPress={()=>operando(4)}/>
                    <Btn text="5" color="white" backgroundColor="#333" onPress={()=>operando(5)}/>
                    <Btn text="6" color="white" backgroundColor="#333" onPress={()=>operando(6)}/>
                    <Btn text="-" color="white" backgroundColor="orange" onPress={()=>operador('-')}/>
                </View>
                <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                    <Btn text="1" color="white" backgroundColor="#333" onPress={()=>operando(1)}/>
                    <Btn text="2" color="white" backgroundColor="#333" onPress={()=>operando(2)}/>
                    <Btn text="3" color="white" backgroundColor="#333" onPress={()=>operando(3)}/>
                    <Btn text="+" color="white" backgroundColor="orange" onPress={()=>operador('+')}/>
                </View>
                <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                    <Btn text="0" color="white" backgroundColor="#333" onPress={()=>operando(0)} long={true} />
                    <Btn text="." color="white" backgroundColor="#333" onPress={()=>operador('.')}/>
                    <Btn text="=" color="white" backgroundColor="orange" onPress={()=>operador('=')}/>
                </View> 
            </View>

        </>
    )
}

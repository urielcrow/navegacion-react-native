import React from 'react';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",]);


export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;


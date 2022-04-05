import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { DrawerNavigatorAvanzado } from './src/navigator/DrawerNavigatorAvanzado';
import { TabsNavigator } from './src/navigator/TabNavigator';
LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",]);


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigatorAvanzado /> */}
      <TabsNavigator/>
    </NavigationContainer>
  )
}

export default App;


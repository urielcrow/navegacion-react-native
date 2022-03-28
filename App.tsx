import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';



export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;


import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { viewStyle, textStyles } from './style'; 


const App = () => {
  return (
    <View style={ viewStyle.contanier }>
        <Text >style test</Text>
        <Text style={ textStyles.text }>inline styling</Text>
    </View>
  );
}; 

export default App;

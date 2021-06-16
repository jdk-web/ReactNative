import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
  Linking 
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainpage from './src/screens/mainpage'
import qnapage from './src/screens/qnapage'
import alert from './src/screens/alert'

const Stack = createStackNavigator();
//console.log(langDatatest.kor);
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "mainpage" initialParams={{ lang : 'ko'}} component={mainpage}  options={{ headerShown: false }} />
        <Stack.Screen name = "alert" component={alert} options={{ title: '알림확인' }} />
        <Stack.Screen name = "qnapage" component={qnapage} options={{ title: '이용문의' }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
//}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


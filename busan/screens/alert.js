import React from 'react';
import SwitchToggle from "react-native-switch-toggle";
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
  Linking,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  createStackNavigator,
} from 'react-native/Libraries/NewAppScreen';

const App = (props) => {
function test(){
    alert(5);
}
return (
    <View>
    <SwitchToggle switchOn={false}  onPress={() => off(!on)}   />
     <Text>aa</Text>
    </View>
  );
};


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


export default App;

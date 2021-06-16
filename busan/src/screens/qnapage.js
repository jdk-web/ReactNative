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
  Linking,
  ToggleSwitch
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  createStackNavigator
} from 'react-native/Libraries/NewAppScreen';
import langData from "../screens/config.json"

const App = (props) => {
  //console.log(props);
  const lang=props.route.params;
  //alert(lang);
  if(lang=="ko")
  {
    var sub_page5_t1=langData.kor.sub_page5_t1;
    var sub_page5_t1_t1=langData.kor.sub_page5_t1_t1;
    var sub_page5_t1_t2=langData.kor.sub_page5_t1_t2;
    var sub_page4_t1=langData.kor.sub_page4_t1;
    var sub_page4_b1=langData.kor.sub_page4_b1;
    var sub_page4_b1_t=langData.kor.sub_page4_b1_t;
    var sub_page4_b2=langData.kor.sub_page4_b2;
    var sub_page4_b2_t = langData.kor.sub_page4_b2_t;
    var sub_page4_b3 = langData.kor.sub_page4_b3;
    var sub_page4_b3_t = langData.kor.sub_page4_b3_t;
  }
  else if(lang=="eng")
  {
    var sub_page5_t1=langData.eng.sub_page5_t1;
    var sub_page5_t1_t1=langData.eng.sub_page5_t1_t1;
    var sub_page5_t1_t2=langData.eng.sub_page5_t1_t2;
    var sub_page4_t1=langData.eng.sub_page4_t1;
    var sub_page4_b1=langData.eng.sub_page4_b1;
    var sub_page4_b1_t=langData.eng.sub_page4_b1_t;
    var sub_page4_b2=langData.eng.sub_page4_b2;
    var sub_page4_b2_t = langData.eng.sub_page4_b2_t;
    var sub_page4_b3 = langData.eng.sub_page4_b3;
    var sub_page4_b3_t = langData.eng.sub_page4_b3_t;
  }
return (
    <View>
      <Text style={{ marginTop : 15, marginLeft : 30, marginRight : 30, fontWeight: "bold", fontSize : 20 }}>
        {sub_page5_t1}
      </Text>
      <Text style={{ marginTop : 15, marginLeft : 30, marginRight : 30, color:"gray"}}>
        {sub_page5_t1_t1}
      </Text>

      <Text style={{ marginTop : 15, marginLeft : 30, marginRight : 30, color:"gray"}}>
        {sub_page5_t1_t2}
      </Text>

      <Text style={{ marginTop : 30, marginLeft : 30, marginRight : 30, fontWeight: "bold", fontSize : 20 }}>
        {sub_page4_t1}
      </Text>
      
      <View style={{ marginTop : 15, marginLeft : 30, marginRight : 30  }} >
        <Button title={sub_page4_b1} color="#324AFA" onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/ ') }></Button>
        <Text style={{ marginTop : 10, color:"gray" }}>
          {sub_page4_b1_t}
        </Text>
      </View>

      <View style={{ marginTop : 15, marginLeft : 30, marginRight : 30  }} >
        <Button title={sub_page4_b2} color="#324AFA" onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/') }></Button>
        <Text style={{ marginTop : 10, color:"gray" }}>
          {sub_page4_b2_t}
        </Text>
      </View>

      <View style={{ marginTop : 15, marginLeft : 30, marginRight : 30  }} >
        <Button title={sub_page4_b3} color="#324AFA" onPress={() => Linking.openURL('tel:0515107827') }></Button>
        <Text style={{ marginTop : 10, color:"gray" }}>
          {sub_page4_b3_t}
        </Text>
      </View>

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

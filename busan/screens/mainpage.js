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
  createStackNavigator
} from 'react-native/Libraries/NewAppScreen';
//import('react-native/Libraries/Lists/FlatList').Props
import langData from "../screens/config.json"

const App = (props) => {
  const navigation = props.navigation
  const lang=props.route.params.lang;
  //alert(props.test);
  //console.log(props.route.params.langDatatest);
  const Data = props.route.params.langDatatest;
  //console.log(props.route.params.langDatatest);
  //alert(props.route.params.langDatatest.ko);
  //alert(props.route.params);
  //alert(props.route.params.lang);
  if(lang === "ko")
  {
    var main_title1=langData.kor.main_title1;
    var main_title2=langData.kor.main_title2;
    var main_title3=langData.kor.main_title3;
    var main_title4=langData.kor.main_title4;
    var main_title5=langData.kor.main_title5;
  }
  else if(lang === "eng")
  {
    var main_title1=langData.eng.main_title1;
    var main_title2=langData.eng.main_title2;
    var main_title3=langData.eng.main_title3;
    var main_title4=langData.eng.main_title4;
    var main_title5=langData.eng.main_title5;
  }
  
return (
    <ScrollView>      
      <View>    
        <ImageBackground resizeMode={'cover'} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}} source={require('../images/bg.jpg')}>

        <View style={{ height:35, marginTop : 10, flexDirection:'row',  justifyContent: 'flex-end', width:Dimensions.get('window').width -10}}>
        <TouchableOpacity onPress={(a) => navigation.navigate('mainpage', {lang : "ko"})}>
          <Text style={{ marginRight : 10, color:"white", borderColor : "white", borderRadius:10, borderWidth:1, paddingTop : 4, paddingLeft : 8, paddingRight : 8, paddingBottom : 2 }} >한국어</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('mainpage', {lang : "eng"}) } style={{ borderStyle : "solid", borderRadius: 10}} >
          <Text style={{ marginRight : 10, color:"white", borderColor : "white", borderRadius:10, borderWidth:1, paddingTop : 4, paddingLeft : 12, paddingRight : 12, paddingBottom : 2 }}  >ENG</Text>
        </TouchableOpacity>
          
        </View>

          <View class="logo" style={{ width : 350, marginTop : 40, marginLeft : 30, marginRight : 30 }}> 
            <Image style={{ width : "100%"}} source={require('../images/logo.png')} resizeMode='contain' />
          </View>

          <View style={{ width : '100%', height:150, marginTop : 60, marginRight : 30, flexDirection:'row', justifyContent:'space-evenly' }} > 
            <TouchableOpacity onPress={() => navigation.navigate('alert',lang)}>
              <View style={{backgroundColor:'white', width:Dimensions.get('window').width /2 - 24, height:180, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/i1.png')} style={{resizeMode:'cover', width:'30%',height:'30%'}} />
                <Text style={{ marginTop : 10}} >{main_title1}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403') }>
              <View style={{backgroundColor:'white', width:Dimensions.get('window').width /2 - 24, height:180, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/i2.png')} style={{resizeMode:'cover', width:'30%',height:'30%'}} />
                <Text style={{ marginTop : 10}} >{main_title2}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ width : '100%', height:150, marginTop : 50, marginRight : 30, flexDirection:'row', justifyContent:'space-evenly' }} >
            
            <TouchableOpacity onPress={() =>  Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601') }>
              <View style={{backgroundColor:'white', width:Dimensions.get('window').width /2 - 90, height:180, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/i3.png')} style={{resizeMode:'cover', width:'45%',height:'30%'}} />
                <Text style={{ marginTop : 10}} >{main_title3}</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401') }>
              <View style={{backgroundColor:'white', width:Dimensions.get('window').width /2 - 90, height:180, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/i4.png')} style={{resizeMode:'cover', width:'45%',height:'30%'}} />
                <Text style={{ marginTop : 10}} >{main_title4}</Text>
              </View>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('qnapage',lang)}>
              <View style={{backgroundColor:'white', width:Dimensions.get('window').width /2 - 90, height:180, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/i5.png')} style={{resizeMode:'cover', width:'45%',height:'30%'}} />
                <Text style={{ marginTop : 10}} >{main_title5}</Text>
              </View>
            </TouchableOpacity>
            
          </View>

        </ImageBackground>
      </View>
    </ScrollView>
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

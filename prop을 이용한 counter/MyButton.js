 import React from 'react';
 import PropTypes from 'prop-types'
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 const MyButton = props => {
    
   return (
     <TouchableOpacity style={{borderRadius : 8, padding : 16, backgroundColor : '#3498db' }} onPress ={()=>props.onPress() }>
         <Text style={{ fontSize : 24 }}>{props.title}</Text>
     </TouchableOpacity>
   );
 };
 
 

 export default MyButton;
 
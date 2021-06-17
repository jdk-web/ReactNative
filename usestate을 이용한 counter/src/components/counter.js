import React, {useState} from 'react'
import { View,ViewBase, Text } from 'react-native'
import MyButton from '../../MyButton'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    return(
      <View>
          <Text>{count}</Text>
          <Text>{double}</Text>
          <MyButton onPress={()=> { setCount(count+1); setDouble(double+2);}} title="+1" />
          <MyButton onPress={()=> setCount(count-1)} title="-1"/>
      </View>  
    );
};

export default Counter;
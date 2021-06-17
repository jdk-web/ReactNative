import { exp } from 'prelude-ls';
import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () =>{
    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    return (
        <View>
            <Text style={{ margin : 10, fontSize : 30 }}> text : {text} </Text>
            <TextInput style={{fontSize : 30}} placeholder="Enter a text" onChange = {_onChange}></TextInput>
        </View>
    );
}

export default EventInput;
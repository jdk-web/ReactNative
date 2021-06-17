import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
    const _onPressIn = () => console.log('Press In !!!\n');
    const _onPressOut = () => console.log('Press Out!');
    const _onPress = () => console.log('Press!');
    const _onLongPress = () => console.log('Long Press!');
    
    return (
        <TouchableOpacity
            style={{padding:16, margin:10, backgroundColor : '#f1c40f'}}
            onPressIn={_onPressIn}
            onLongPress={_onLongPress}
            onPressOut={_onPressOut}
            onPress={_onPress}
            >
                <Text>Press</Text>
        </TouchableOpacity>      
    );
};
export default EventButton;

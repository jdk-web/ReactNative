import React, {useState} from 'react';
import { View,Switch } from 'react-native';
const App = () => {
  const [off, setIsDefault] = useState(false);
  const _toggleSwitch = () => setIsDefault(!off);

  return (
    <View>
      <Switch value={off} onValueChange={_toggleSwitch} />
    </View>
  );
}; 

export default App;

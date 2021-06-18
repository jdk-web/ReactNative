import React, {useState} from 'react';
import { View,Switch } from 'react-native';
const App = () => {
  const [off, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!off);

  return (
    <View>
      <Switch value={off} onValueChange={_toggleSwitch} />
    </View>
  );
}; 

export default App;

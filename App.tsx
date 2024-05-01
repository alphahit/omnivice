import React from 'react';
// Adjust the path as needed
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyStack from './src/navigation/MyStack';
import store from './src/store/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

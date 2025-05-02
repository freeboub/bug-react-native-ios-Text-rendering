/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import {
  View,
} from 'react-native';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {

  console.log('refresh main');

  useForm();
  
  return (
    <View style={{backgroundColor: 'blue'}}>
          <Header/>
    </View>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const baseFontSize = 16;
const fontFamily = "Arial"; // "Cochin"

const containerStyle = {height: '50%', width: '50%', top: 100} as const;

const baseStyle = {
  fontWeight: 'bold',
  textDecorationLine: 'underline',
  fontFamily,
  fontSize: baseFontSize,
  lineHeight: baseFontSize * 1.9,
} as const;

const biggerFactor = 3;
const biggerStyle = {
  ...baseStyle,
  fontSize: baseFontSize + biggerFactor,
  lineHeight: (baseFontSize + biggerFactor) * 1.9,
} as const;

function App(): React.JSX.Element {
  return (
    <View style={containerStyle}>
        <Text
          style={baseStyle}
          >
            Here we display bold underline text in Arial font
          <Text style={biggerStyle}>
             Now let's increase the font size
          </Text>
        </Text>
    </View>
  );
}

export default App;

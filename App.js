/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/Welcome'
import TestComponent1 from './src/components/TestComponent1'
import TestComponent2 from './src/components/TestComponent2'
export default class App extends Component {
  render() {
    return (
    <View style={styles.container} >
      {/* <Welcome  language="JA" /> */}
      {/* <TestComponent1/> */}
      <TestComponent2 />


    </View>
    )


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ff3f5f'
  }
});

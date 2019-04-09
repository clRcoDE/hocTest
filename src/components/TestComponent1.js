import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import WithAlertBox from './WithAlertBox'
class TestComponent1 extends Component {
  render() {
    return (
      <View  style={styles.container} >
      <View style={styles.wrapper} >
      <Text> textInComponent2 </Text>
      </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#49adff',
},
wrapper:{
    backgroundColor:'gold',
}
})


export default WithAlertBox(TestComponent1)
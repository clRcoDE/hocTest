import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

import WithAlertBox from './WithAlertBox'
class TestComponent2 extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
  render() {
    return (
      <View  style={styles.container} >
      <View style={styles.wrapper} >
      <Text> textInComponent2 </Text>
      <Button title="show" onPress={this.props.show} />
      
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
        backgroundColor:'#49adff',
    }
})


const TestComponentWithAlertBox =  WithAlertBox(TestComponent2)

export default  TestComponentWithAlertBox
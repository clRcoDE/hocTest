import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {actionTypes} from './AlertBox'
import WithAlertBox from './WithAlertBox'
class TestComponent2 extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    errorMessage(message){
this.props.pushToAlert(message, actionTypes.error.type)
    }
    warningMessage(message){
      this.props.pushToAlert(message , actionTypes.warning.type)

    }
    successMessage(message){
      this.props.pushToAlert(message , actionTypes.success.type)

    }
    infoMessage(message){
      this.props.pushToAlert(message , actionTypes.info.type)

    }
  render() {
    return (
      <View  style={styles.container} >
      <View style={styles.wrapper} >
      <Text> textInComponent2 </Text>
      <Button title="error" onPress={()=>this.errorMessage("ALL YOUR FAULT!")} />
      <Button title="warning" onPress={()=>this.warningMessage("WATCH IT!")} />
      <Button title="success" onPress={()=>this.successMessage("YOU DID IT  RIGHT DUDE!")} />
      <Button title="info" onPress={()=>this.infoMessage("Did you knowa bear has 42 teeth?")} />
      
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


const TestComponentWithAlertBox =  WithAlertBox(TestComponent2 )

export default  TestComponentWithAlertBox
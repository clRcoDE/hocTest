import React, { Component } from 'react'
import { Text, StyleSheet, View,Button , TouchableOpacity, Dimensions } from 'react-native'
import AlertBox from './AlertBox'


const dim = Dimensions.get('window')

const initialState = {
    isShow: false,
    payload: null,
    colorType:"#6e88ad",
    
}
export const types = {
    error:{
        type:'ERROR',
        color:'#ed2a2a'
    },
    
    success:{
        type:"SUCCESS",
        color:'#09ea27'
    },
    
    warning:{
        type:"WARNING",
        color:'#ffc444'
    },
    
    info:{
        type:'INFO',
        color:'#6e88ad'
    },
    question:{
        type:"QUESTION",
        color:'#383838'
    },
    

    

}

export default WithAlertBox = WrappedComponent => {
    return class Dialog extends Component {
        constructor(props){
            super(props)
            this.state={
                ...initialState
            }
        }
        hide =()=>{
            this.setState({isShow:false})
        }
        show =()=>{
            this.setState({isShow:true})
          
        }
        getAlertType=()=>{
            switch (this.props.actionType) {
                case 'QUESTION':
                this.setState({colorType:types.question.color})
                    break;
                case 'INFO':
                this.setState({colorType:types.info.color})
                    break;
                case 'ERROR':
                this.setState({colorType:types.error.color})
                    break;
                case 'WARNING':
                this.setState({colorType:types.warning.color})
                    
                    break;
                case 'SUCCESS':
                this.setState({colorType:types.success.color})

                    break;

            }
        }
        componentDidMount(){
            this.getAlertType()
        }
        render(){
            const {isShow} = this.state
            
           
            return (
            <View  style={styles.container} >
                <WrappedComponent  {...this.props} show={this.show} hide={this.hide} />

                {isShow && 
                
                <AlertBox  {...this.props}  hide={this.hide} color={this.state.colorType}  type={this.state.messageType} />
                }
               <View style={{height:100, flexDirection: 'row',}}>
               
               
               </View>
            </View>
                )
        }
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
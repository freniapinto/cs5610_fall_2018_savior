import {Component} from "react";
import React from "react";
import Hoshi from "react-native-textinput-effects/lib/Hoshi";
import {StyleSheet, View,TouchableHighlight,} from 'react-native';
import {Button, Text} from "react-native-elements";
import {createStackNavigator} from "react-navigation";
import Register from "./Register";
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:''
        }
    }
    static navigationOptions = {
        title: 'Create an Account',
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30,textAlign:'center'}}>Login</Text>
                <Hoshi
                    label={'Username'}
                    onChangeText={(text) => { this.setState({username: text})}}
                    // this is used as active border color
                    borderColor={'#d32f2f'}
                    // this is used to set backgroundColor of label mask.
                    // please pass the backgroundColor of    your TextInput container.
                    value = {this.state.username}
                    backgroundColor={'#F9F7F6'}
                    style={{marginTop:15}}
                />
                <Hoshi
                    label={'Password'}
                    onChangeText={(text) => { this.setState({password: text})}}
                    // this is used as active border color
                    borderColor={'#d32f2f'}
                    // this is used to set backgroundColor of label mask.
                    // please pass the backgroundColor of your TextInput container.
                    backgroundColor={'#F9F7F6'}
                    value = {this.state.password}
                    style={{marginTop:15}}
                />
                <TouchableHighlight
                    underlayColor={'#d32f2f'}
                    activeOpacity={0.5}
                    onPress={() => this.props.login(this.state.username,this.state.password)}
                    style={styles.button}>
                    <Text style={{color:'white',fontSize:20}}> Login </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{marginLeft:'75%'}}
                    onPress={() => this.props.navigateToRegister()}>
                    <Text style={{color:'black',fontSize:20}}> Register </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: '45%',
        marginLeft: '5%',
        marginRight: '10%'},
    button: {
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        padding: 10,
        marginTop:10,
        marginLeft: 5},
});
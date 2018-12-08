import {Component} from "react";
import React from "react";
import { View } from 'react-native';
import {Text} from "react-native-elements";
import Login from './Login'
import Register from "./Register";
export default class Profile extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                {this.props.loggedIn === true && <Text>Profile</Text>}
                {this.props.registering === false &&
                    <Login login ={this.props.login}
                           navigateToRegister={this.props.navigateToRegister}/>}
                {this.props.registering === true && <Register/>}
           </View>

        );

    }
}
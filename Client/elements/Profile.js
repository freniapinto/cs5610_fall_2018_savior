import {Component} from "react";
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import Login from './Login'
import Register from "./Register";
import Row from "react-native-easy-grid/Components/Row";
import Col from "react-native-easy-grid/Components/Col";
export default class Profile extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                {this.props.loggedIn === true && this.renderProfile()}
                {(this.props.registering === false && this.props.loggedIn === false) &&
                    <Login login ={this.props.login}
                           navigateToRegister={this.props.navigateToRegister}/>}
                {(this.props.registering === true && this.props.loggedIn === false)  &&
                    <Register registerUser = {this.props.registerUser}/>}
           </View>);
    }
    renderProfile =() =>{
        return(
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.names}>John Doe</Text><Text></Text>
                        <Text style={styles.description}>Blood Group : </Text>
                        <Text style={styles.description}>80 st Alphonsus street , Boston MA 02120</Text>
                        <Text style={styles.description}>123-456-7890</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#d32f2f",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },

    body:{
        marginTop:'20%',

    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',

    },
    names:{
        fontSize:28,
        color: "black",


    },
    info:{

        fontSize:16,
        color: "black",
        marginBottom:20

    },
    description:{
        fontSize:16,
        color: "black",
        marginBottom:10

    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
});
import {Component} from "react";
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity, TouchableHighlight
} from 'react-native';

import Login from './Login'
import Register from "./Register";
import Icon from 'react-native-vector-icons/FontAwesome';
import Row from "react-native-easy-grid/Components/Row";
import Col from "react-native-easy-grid/Components/Col";
import Hoshi from "react-native-textinput-effects/lib/Hoshi";
import Admin from "./Admin";
import {Button} from "react-native-elements";
export default class Profile extends Component {

    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props.registering)

        return(
            <View>
                {this.props.anonUser &&
                <Text style={{fontSize:30 ,textAlign: 'center'}}>Please Login to access all features of the App</Text>}
                {this.props.loggedIn === true && this.renderProfile()}
                {(this.props.registering === false && this.props.loggedIn === false) &&
                    <Login login ={this.props.login}
                           navigateToRegister={this.props.navigateToRegister}/>}

                {(this.props.registering === true && this.props.loggedIn === false)  &&
                    <Register registerUser = {this.props.registerUser}/>}
           </View>);
    }
    renderProfile =() =>{
        console.log(this.props.user)
        return(
            <View>
                {this.props.user.type === "ADMIN" ? this.renderAdmin()
                :<View style={styles.container}>
                    <View style={styles.header}></View>
                    {this.props.user.gender === "Male" &&
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>}
                    {this.props.user.gender === "Female" &&
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar5.png'}}/>}
                    <View style={styles.body}>
                        {this.props.user.type === "DONOR" && this.renderDonor()}
                        {this.props.user.type === "BLOOD_BANK" && this.renderBank()}

                    </View>
                </View>}
            </View>
        )
    }

    renderAdmin = () => {
        return(
            <Admin/>
        )
    }

    renderDonor=() =>{
        return(
            <View style={styles.bodyContent}>
                <Text style={styles.names}>{this.props.user.first_name} {this.props.user.last_name}</Text><Text></Text>
                <Text style={styles.description}>Blood Group : {this.props.user.donor.blood_group}</Text>
                <Text style={styles.description}>{this.props.user.address}</Text>
                <Text style={styles.description}><Icon name="phone-square" size={18} color="green"/> &nbsp;&nbsp;
                    {this.props.user.contact}</Text>
            </View>
        )
    }
    renderBank = () => {
        return(
            <View style={styles.bodyContent}>
                <Text style={{fontSize:20,}}>{this.props.user.bloodBank.blood_bank_name}</Text>
                <Text style={{fontSize:15,marginTop:10}}>Blood Availability Details</Text>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop:"10%",
                    justifyContent: 'space-between'}}>

                    <View style={{paddingLeft: 20,flex: 1}}>
                        <Text>A+ : {this.props.user.bloodBank.a_plus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>A- : {this.props.user.bloodBank.a_minus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>B+ : {this.props.user.bloodBank.b_plus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>B-+ : {this.props.user.bloodBank.b_minus} </Text>
                    </View>
                </View>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop:"10%",
                    justifyContent: 'space-between'}}>
                    <View style={{paddingLeft: 20,flex: 1}}>
                        <Text>AB+ : {this.props.user.bloodBank.ab_plus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>AB- : {this.props.user.bloodBank.ab_minus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>O+ : {this.props.user.bloodBank.o_plus} </Text>
                    </View>
                    <View style={{paddingRight: 20,flex: 1}}>
                        <Text>O-+ : {this.props.user.bloodBank.o_minus} </Text>
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor={'#0693e3'}
                    activeOpacity={0.5}
                    style = {{  backgroundColor: '#0693e3',marginTop:"15%"}}>
                    <Text style={{color: 'white', fontSize: 20}}> Update Stocks </Text>
                </TouchableHighlight>
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

        fontSize:18,
        color: "black",
        marginBottom:20

    },
    description:{
        fontSize:16,
        color: "black",
        marginTop:10

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
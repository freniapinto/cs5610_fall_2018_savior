import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Text} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import Profile from './elements/Profile'
import Tabbar from "react-native-tabbar-bottom";
import {createStackNavigator} from "react-navigation";
import Register from "./elements/Register";
import PostForm from "./elements/PostForm";
import Favorites from "./elements/Favorites";

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Savior',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#d32f2f', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' ,fontSize: 30},
    };

    constructor(props) {
        super(props)
        this.state = {
            page: "HomeScreen",
            loggedIn:false,
            registering:false,
            user : {},
            anonUser:true
        }
    }
    login = (username,password) =>{
        fetch('https://blooming-castle-18974.herokuapp.com/savior/login',{
            credentials: 'include', method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({username:username,password:password})
        }).then(response=> response.json())
            .then(user => this.setState({loggedIn:true, user:user[0],anonUser:false}))

    }


    navigateToRegister =() =>{
       this.setState({registering:true})
    }

    registerUser = (user) => {
        console.log(user)
        fetch('https://blooming-castle-18974.herokuapp.com/savior/register',{
            credentials: 'include', method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        }).
        then(this.setState({registering:false}))
    }

    postComment = (post) =>  {
        console.log(JSON.stringify(post))
        fetch('https://blooming-castle-18974.herokuapp.com/savior/post',{
            credentials: 'include', method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(post)
        }).then(response=> console.log(response)).then(this.setState({page:"HomeScreen"}))
    }


    render() {

        return (
            <View style={styles.container}>
                {
                    // if you are using react-navigation just pass the navigation object in your components like this:
                    // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
                }
                {this.state.page === "HomeScreen" &&
                <View style={styles.homeScreen}>
                    {/*<FixedHeader/>*/}
                    <Grid >
                        <Row>
                            <Col style={styles.gridbackground}
                                 onPress = {() => this.props.navigation.navigate('BloodBanksNearMe',{userId: this.state.user._id})}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Blood Banks Near Me</Text>
                            </Col>
                            <Col style={styles.gridbackground}
                                 onPress = {() => this.props.navigation.navigate('DonorsNearMe')}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Donors Near Me</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.gridbackground}
                                 onPress = {() => this.props.navigation.navigate('BloodStocks')}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Blood Stocks</Text>
                            </Col>
                            <Col style={styles.gridbackground}
                                 onPress = {() => this.props.navigation.navigate('Community',{userId: this.state.user._id})}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Community</Text>
                            </Col>
                        </Row>
                    </Grid>
                </View>}
                {(this.state.page === "Fav" && this.state.loggedIn) && <Favorites/>}
                {this.state.page === "ProfileScreen" && <Profile user = {this.state.user}
                                                            registerUser = {this.registerUser}
                                                            navigateToRegister={this.navigateToRegister}
                                                            registering={this.state.registering}
                                                            loggedIn={this.state.loggedIn} login={this.login}/>}

                {(this.state.page === "Post" && this.state.loggedIn ) && <PostForm postComment = {this.postComment}
                                                         user = {this.state.user}/>}

                {(this.state.page === "Post"&& !this.state.loggedIn)  && <Profile user = {this.state.user}
                                                                                  anonUser={this.state.anonUser}
                                                                 registerUser = {this.registerUser}
                                                                 navigateToRegister={this.navigateToRegister}
                                                                 registering={this.state.registering}
                                                                 loggedIn={this.state.loggedIn} login={this.login}/>}

                {(this.state.page === "Fav"&& !this.state.loggedIn)  && <Profile user = {this.state.user}
                                                                                  anonUser={this.state.anonUser}
                                                                                  registerUser = {this.registerUser}
                                                                                  navigateToRegister={this.navigateToRegister}
                                                                                  registering={this.state.registering}
                                                                                  loggedIn={this.state.loggedIn} login={this.login}/>}



                <Tabbar
                    stateFunc={(tab) => {
                        this.setState({page: tab.page})
                        //this.props.navigation.setParams({tabTitle: tab.title})
                    }}
                    tabbarBgColor='#d32f2f'
                    activePage={this.state.page}
                    tabs={[
                        {
                            page: "Fav",
                            icon: "md-heart",

                        },
                        {
                            page: "HomeScreen",
                            icon: "md-home",
                        },

                        {
                            page: "Post",
                            icon: "md-clipboard",

                        },
                        {
                            page: "ProfileScreen",
                            icon: "md-person",
                        },

                    ]}
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    homeScreen:{
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:'8%'
    },
    gridbackground:{
        backgroundColor:'#d32f2f',
        margin:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
    }

});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Text} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import Profile from './elements/Profile'
import Tabbar from "react-native-tabbar-bottom";
import {createStackNavigator} from "react-navigation";
import Register from "./elements/Register";

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
        }
    }
    login = (username,password) =>{
        this.setState({loggedIn:true})
        alert(username+" "+password)
    }

    navigateToRegister =() =>{
       this.setState({registering:true})
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
                                 onPress = {() => this.props.navigation.navigate('BloodBanksNearMe')}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Blood Banks Near Me</Text>
                            </Col>
                            <Col style={styles.gridbackground}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Donors Near Me</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.gridbackground}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Blood Stocks</Text>
                            </Col>
                            <Col style={styles.gridbackground}>
                                <Text style={{marginTop:'50%',marginLeft:10,color:'white',fontSize:30}}>Community</Text>
                            </Col>
                        </Row>
                    </Grid>
                </View>}
                {this.state.page === "Fav" && <Text>Screen2</Text>}
                {this.state.page === "ProfileScreen" && <Profile
                                                            navigateToRegister={this.navigateToRegister}
                                                            registering={this.state.registering}
                                                            loggedIn={this.state.loggedIn} login={this.login}/>}
                {this.state.page === "Post" && <Text>Screen4</Text>}
                {this.state.page === "SearchScreen" && <Text>Screen5</Text>}

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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import FixedHeader from "./elements/FixedHeader";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import BloodBanksNearMe from './elements/BloodBanksNearMe';
import Home from './Home'
import {Button} from "react-native-elements";
import SelectedBloodBank from "./elements/SelectedBloodBank";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    gridbackground:{
        backgroundColor:'#d32f2f',
        margin:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
    }
});

/*const Home = ({navigation}) => (
    <View style={styles.container}>
        <FixedHeader/>
        <Grid >
            <Row>
                <Col style={styles.gridbackground}>
                    <Text>1</Text>
                    <Button title="Go to Blood Banks Screen"
                            onPress={() => navigation.navigate('BloodBanksNearMe')}/>
                </Col>
                <Col style={styles.gridbackground}>
                    <Text>2</Text>
                </Col>
            </Row>
            <Row>
                <Col style={styles.gridbackground}>
                    <Text>3</Text>
                </Col>
                <Col style={styles.gridbackground}>
                    <Text>4</Text>
                </Col>
            </Row>
        </Grid>
    </View>
)*/

/*
const BloodBanksNearMe = () => (
    <View>
        <Text>Welcome to blood banks screen!</Text>
    </View>
);
*/

const MainNavigator =  createStackNavigator({
    Home: {screen: Home},
    BloodBanksNearMe: {screen: BloodBanksNearMe},
    SelectedBloodBank: {screen: SelectedBloodBank}
});
const App = createAppContainer(MainNavigator);

export default App
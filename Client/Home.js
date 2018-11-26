import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import FixedHeader from "./elements/FixedHeader"

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Saviour'
    };

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <FixedHeader/>
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
            </View>
        );
    }
}

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
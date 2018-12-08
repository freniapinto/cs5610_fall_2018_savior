import React, {Component} from "react";
import {Text} from "react-native-elements";
import Hoshi from "react-native-textinput-effects/lib/Hoshi";
import {StyleSheet, ScrollView, View, TouchableHighlight} from 'react-native';
import {Col, Row} from "react-native-easy-grid";
import {Switch} from "react-native-switch";



export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            bloodBank:false,
            nextScreen:false,

        }
    }
    toggleSwitch = () => {
        this.setState({bloodBank:!this.state.bloodBank})
    }
    render(){
        return(
            <ScrollView  >
                {this.state.nextScreen
                    ? <View style={{flex: 1, paddingBottom: '20%'}}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Register</Text>
                        <Hoshi
                            label={'First Name'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Last Name'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Username'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Password'}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Address'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'City'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Contact'}
                            // this is used as active border color
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Email Address'}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Row>
                            <Col style={{paddingRight: 20}}>
                                <Hoshi
                                    label={'Age'}
                                    borderColor={'#d32f2f'}
                                    backgroundColor={'#F9F7F6'}
                                    style={{marginTop: 15}}/>
                            </Col>
                            <Col>
                                <Hoshi
                                    label={'Gender'}
                                    borderColor={'#d32f2f'}
                                    backgroundColor={'#F9F7F6'}
                                    style={{marginTop: 15}}/>
                            </Col>
                        </Row>
                        <Row style={{margin: 15, marginTop: 20}}>
                            <Col style={{paddingRight: 15}}>
                                <Text style={{fontSize: 20}}>Are you a Blood Bank Representative? </Text>
                            </Col>
                            <Col>
                                <Switch
                                    value={this.state.bloodBank}
                                    onValueChange={() => this.toggleSwitch()}
                                    disabled={false}
                                    activeText={"Donor"}
                                    inActiveText={'BloodBank'}
                                    circleSize={40}
                                    barHeight={40}
                                    backgroundInactive={'#d32f2f'}
                                    circleBorderWidth={2}
                                    circleActiveColor={'#30a566'}
                                    circleInActiveColor={'#d32f2f'}
                                    changeValueImmediately={true}
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={false}
                                    renderInActiveText={false}

                                    switchLeftPx={1} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={1} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={3} // multipled by the `circleSize` prop to calculate total width of the Switch
                                />
                            </Col>
                        </Row>
                        <TouchableHighlight
                            underlayColor={'#0693e3'}
                            activeOpacity={0.5}
                            onPress={() => this.setState({nextScreen: this.state.nextScreen})}
                            style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}> Next </Text>
                        </TouchableHighlight>


                    </View>
                    : <View style={{flex: 1, paddingBottom: '20%'}}>
                        {this.state.bloodBank
                            ?<View>
                            <Text style={{fontSize: 30, textAlign: 'center'}}>Register</Text>
                            <Hoshi
                                label={'First Name'}
                                // this is used as active border color
                                borderColor={'#d32f2f'}
                                backgroundColor={'#F9F7F6'}
                                style={{marginTop: 15}}/>
                            <Hoshi
                                label={'Last Name'}
                                // this is used as active border color
                                borderColor={'#d32f2f'}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of    your TextInput container.
                                backgroundColor={'#F9F7F6'}
                                style={{marginTop: 15}}/>
                        </View>
                            :}
                    </View>
                }


            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({


    button: {
        alignItems: 'center',
        backgroundColor: '#0693e3',
        padding: 10,
        marginTop:10,
        marginLeft: 5},
});
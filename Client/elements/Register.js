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
            tattoo_piercing:false,
            treatment:false,
            username:'',
            password:'',
            firstName:'',lastDonate:'',
            lastName:'',address:'',city:'',
            contact:'',email:'',age:'',gender:'',
            Aplus:0,Aneg:0,bplus:0,bneg:0,
            abPlus:0,abNeg:0,oPlus:0,oNeg:0,
            bloodGroup:'',
            bloodBankName:''

        }
    }

    createUser = () =>{

        if(!this.state.bloodBank){
            return ({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                username:this.state.username,
                password:this.state.password,
                age:this.state.age,
                gender:this.state.gender,
                contact:this.state.contact,
                emailId:this.state.email,
                address:this.state.address,
                city:this.state.city,
                type:"DONOR",
                donor: {
                    blood_group:this.state.bloodGroup,
                    last_donated: this.state.lastDonate,
                    tattoo_piercing:this.state.tattoo_piercing.toString(),
                    undergoing_treatment:this.state.treatment,
                }
            })}
            else{
            return ({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                age: this.state.age,
                gender: this.state.gender,
                contact: this.state.contact,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                type: "BLOOD_BANK",
                bloodBank: {
                    blood_bank_name: this.state.bloodBankName,
                    ab_plus: this.state.abPlus,
                    ab_minus: this.state.abNeg,
                    a_plus: this.state.Aplus,
                    a_minus:this.state.Aneg,
                    b_minus: this.state.bneg,
                    b_plus: this.state.bplus,
                    o_plus: this.state.oPlus,
                    o_minus: this.state.oNeg
                }
            })}

    }
    toggleSwitch = () => {
        this.setState({bloodBank:!this.state.bloodBank})
    }
    render(){
        return(
            <ScrollView  >
                {!this.state.nextScreen
                    ? <View style={{flex: 1, paddingBottom: '20%'}}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Register</Text>
                        <Hoshi
                            label={'First Name'}
                            onChangeText={(text) => this.setState({firstName:text})}
                            value={this.state.firstName}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Last Name'}
                            onChangeText={(text) => this.setState({lastName:text})}
                            value={this.state.lastName}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Username'}
                            onChangeText={(text) => this.setState({username:text})}
                            value={this.state.username}
                            borderColor={'#d32f2f'}
                            // this is used to set backgroundColor of label mask.
                            // please pass the backgroundColor of    your TextInput container.
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Password'}
                            onChangeText={(text) => this.setState({password:text})}
                            value={this.state.password}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Address'}
                            borderColor={'#d32f2f'}
                            onChangeText={(text) => this.setState({address:text})}
                            value={this.state.address}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'City'}
                            onChangeText={(text) => this.setState({city:text})}
                            value={this.state.city}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            label={'Contact'}
                            onChangeText={(text) => this.setState({contact:text})}
                            value={this.state.contact}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Hoshi
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.email}
                            label={'Email Address'}
                            borderColor={'#d32f2f'}
                            backgroundColor={'#F9F7F6'}
                            style={{marginTop: 15}}/>
                        <Row>
                            <Col style={{paddingRight: 20}}>
                                <Hoshi
                                    label={'Age'}
                                    onChangeText={(text) => this.setState({age:text})}
                                    value={this.state.age}
                                    borderColor={'#d32f2f'}
                                    backgroundColor={'#F9F7F6'}
                                    style={{marginTop: 15}}/>
                            </Col>
                            <Col>
                                <Hoshi
                                    label={'Gender'}
                                    onChangeText={(text) => this.setState({gender:text})}
                                    value={this.state.gender}
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
                            onPress={() => this.setState({nextScreen: !this.state.nextScreen})}
                            style={styles.button}>
                            <Text style={{color: 'white', fontSize: 20}}> Next </Text>
                        </TouchableHighlight>


                    </View>
                    : <View style={{flex: 1, paddingBottom: '20%'}}>
                        {this.state.bloodBank
                            ?<View>
                                <Text style={{fontSize: 20, textAlign: 'center'}}>Enter the availability of blood stocks at your Bank</Text>
                                <Hoshi
                                    onChangeText={(text) => this.setState({bloodBankName:text})}
                                    value={this.state.bloodBankName}
                                    label={'Blood Bank Name'}
                                    borderColor={'#d32f2f'}
                                    backgroundColor={'#F9F7F6'}
                                    style={{marginTop: 15}}/>
                                <Row>
                                    <Col style={{paddingRight: 20}}>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({Aplus:text})}
                                            value={this.state.Aplus}
                                            label={'A+'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                    <Col>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({Aneg:text})}
                                            value={this.state.Aneg}
                                            label={'A-'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{paddingRight: 20}}>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({bplus:text})}
                                            value={this.state.bplus}
                                            label={'B+'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                    <Col>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({bneg:text})}
                                            value={this.state.bneg}
                                            label={'B-'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{paddingRight: 20}}>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({abPlus:text})}
                                            value={this.state.abPlus}
                                            label={'AB+'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                    <Col>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({abNeg:text})}
                                            value={this.state.abNeg}
                                            label={'AB+'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{paddingRight: 20}}>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({oPlus:text})}
                                            value={this.state.oPlus}
                                            label={'O+'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                    <Col>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({oNeg:text})}
                                            value={this.state.oNeg}
                                            label={'O-'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                </Row>
                                <TouchableHighlight
                                    underlayColor={'#0693e3'}
                                    activeOpacity={0.5}
                                    onPress={() => this.props.registerUser(this.createUser())}
                                    style={styles.button}>
                                    <Text style={{color: 'white', fontSize: 20}}> Done </Text>
                                </TouchableHighlight>
                            </View>
                            :<View>
                                <Text style={{fontSize: 20, textAlign: 'center'}}>
                                    Additional Details to help you/other find Donor sooner</Text>
                                <Row>
                                    <Col style={{paddingRight: 20}}>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({bloodGroup:text})}
                                            value={this.state.bloodGroup}
                                            label={'Blood Group'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                    <Col>
                                        <Hoshi
                                            onChangeText={(text) => this.setState({lastDonated:text})}
                                            value={this.state.lastDonate}
                                            label={'Last Donated'}
                                            borderColor={'#d32f2f'}
                                            backgroundColor={'#F9F7F6'}
                                            style={{marginTop: 15}}/>
                                    </Col>
                                </Row>
                                <Row style={{margin: 15, marginTop: 20}}>
                                    <Col style={{paddingRight: 15}}>
                                        <Text style={{fontSize: 20}}>Do you have any Tatto/piercing? </Text>
                                    </Col>
                                    <Col>
                                        <Switch
                                            value={this.state.tattoo_piercing}
                                            onValueChange={() => this.setState({tattoo_piercing:!this.state.tattoo_piercing})}
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
                                <Row style={{margin: 15, marginTop: 20}}>
                                    <Col style={{paddingRight: 15}}>
                                        <Text style={{fontSize: 20}}>Are you undergoing any treatment? </Text>
                                    </Col>
                                    <Col>
                                        <Switch
                                            value={this.state.treatment}
                                            onValueChange={() => this.setState({treatment:!this.state.treatment})}
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
                                    onPress={() => this.props.registerUser(this.createUser())}
                                    style = {styles.button}>
                                    <Text style={{color: 'white', fontSize: 20}}> Done </Text>
                                </TouchableHighlight>
                            </View>}
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
        marginLeft: 5},});
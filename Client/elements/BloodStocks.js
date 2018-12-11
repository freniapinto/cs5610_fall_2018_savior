import React, {Component} from 'react'
import BloodBanksNearby from "../services/BloodBanksNearby";
import { Switch } from "react-native-switch"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {View, Alert, Text, ListView,Button, TextInput, ScrollView} from "react-native"
import {CheckBox} from "react-native-elements"
import { Col, Row, Grid } from "react-native-easy-grid";
import Hideo from "react-native-textinput-effects/lib/Hideo";
import BloodStockItem from "../elements/BloodStockItem"
import Modal from "react-native-modal"


export default class BloodStocks extends Component {
    static navigationOptions = {
        title: 'Blood Stocks',
    }
    constructor(props){
        super(props);
        //this.renderRow = this.renderRow.bind(this);
        this.state ={

            nearbyBloodStocks: [],
            location:'Enter Location',
            isModalVisible: false,
            aPositiveChecked: false,
            aNegativeChecked: false,
            bPositiveChecked: false,
            bNegativeChecked: false,
            abPositiveChecked: false,
            abNegativeChecked: false,
            oPositiveChecked: false,
            oNegativeChecked: false
        }

    }

    toggleModalVisibility =() => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }


    findBloodStocks = () => {
        console.log(this.state.location)
        BloodBanksNearby.findBloodStocks(this.state.location)
            .then((nearbyBloodStocks) =>
                this.setState({
                    nearbyBloodStocks: nearbyBloodStocks
                }, console.log(this.state.nearbyBloodStocks)))
    }

    render() {

        return (
            <ScrollView>
                <Hideo
                    onChangeText={(text) => { this.setState({location: text})}}
                    onSubmitEditing={() => this.findBloodStocks()}
                    iconClass={Icon}
                    iconName={'location-arrow'}
                    iconColor={'white'}
                    value ={this.state.location}
                    clearTextOnFocus={true}
                    iconBackgroundColor={'#d32f2f'}
                    inputStyle={{ color: '#d32f2f',borderBottomColor: '#d32f2f',borderBottomWidth: 3 }}
                />
                {this.state.nearbyBloodStocks!==[] && this.state.nearbyBloodStocks.map((bloodstock, index) =>(
                    <BloodStockItem rowData={bloodstock} key={index}/>
                ))}
                <Modal isVisible={this.state.isModalVisible}>
                    <View>

                        <CheckBox title="A+"
                                  onPress={()=>this.setState({aPositiveChecked: !this.state.aPositiveChecked})}
                                  checked={this.state.aPositiveChecked}/>
                        <CheckBox title="A-"
                                  onPress={()=>this.setState({aNegativeChecked: !this.state.aNegativeChecked})}
                                  checked={this.state.aNegativeChecked}/>
                        <CheckBox title="B+"
                                  onPress={()=>this.setState({bPositiveChecked: !this.state.bPositiveChecked})}
                                  checked={this.state.bPositiveChecked}/>
                        <CheckBox title="B-"
                                  onPress={()=>this.setState({bNegativeChecked: !this.state.bNegativeChecked})}
                                  checked={this.state.bNegativeChecked}/>
                        <CheckBox title="AB+"
                                  onPress={()=>this.setState({abPositiveChecked: !this.state.abPositiveChecked})}
                                  checked={this.state.abPositiveChecked}/>
                        <CheckBox title="AB-"
                                  onPress={()=>this.setState({abNegativeChecked: !this.state.abNegativeChecked})}
                                  checked={this.state.abNegativeChecked}/>
                        <CheckBox title="O+"
                                  onPress={()=>this.setState({oPositiveChecked: !this.state.oPositiveChecked})}
                                  checked={this.state.oPositiveChecked}/>
                        <CheckBox title="O-"
                                  onPress={()=>this.setState({oNegativeChecked: !this.state.oNegativeChecked})}
                                  checked={this.state.oNegativeChecked}/>
                        <Button title="Submit"
                                onPress={()=>this.toggleModalVisibility()}></Button>
                    </View>

                </Modal>
            </ScrollView>


        )
    }
}
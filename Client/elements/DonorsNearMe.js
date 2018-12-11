import React, {Component} from 'react'
import BloodBanksNearby from "../services/BloodBanksNearby";
import { Switch } from "react-native-switch"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {View, Alert, Text, ListView,Button, TextInput, ScrollView} from "react-native"
import {CheckBox} from "react-native-elements"
import { Col, Row, Grid } from "react-native-easy-grid";
import Hideo from "react-native-textinput-effects/lib/Hideo";
import ListItem from "../elements/ListItem"
import Modal from "react-native-modal"

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
export default class DonorsNearMe extends Component {
    static navigationOptions = {
        title: 'Donors Near Me',
    }
    constructor(props){
        super(props);
        //this.renderRow = this.renderRow.bind(this);
        this.state ={

            nearByDonors: [],
            dataSource:ds,
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
    componentDidMount() {
        //this.findBloodCentre()
    }

    toggleModalVisibility =() => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    getDonorsByBloodType = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
        let bloodTypeList = []
        if (this.state.aPositiveChecked) {
            bloodTypeList.push("A+")
        }
        if (this.state.aNegativeChecked) {
            bloodTypeList.push("A-")
        }
        if (this.state.bPositiveChecked) {
            bloodTypeList.push("B+")
        }
        if (this.state.bNegativeChecked) {
            bloodTypeList.push("B-")
        }
        if (this.state.abPositiveChecked) {
            bloodTypeList.push("AB+")
        }
        if (this.state.abNegativeChecked) {
            bloodTypeList.push("AB-")
        }
        if (this.state.oPositiveChecked) {
            bloodTypeList.push("O+")
        }
        if (this.state.oNegativeChecked) {
            bloodTypeList.push("O-")
        }
        const data = {
            city: this.state.location,
            type: bloodTypeList
        }

        BloodBanksNearby.filterByBloodTypes(data).then((nearbyDonorsFilteredByBloodType) =>
            this.setState({
                nearByDonors: nearbyDonorsFilteredByBloodType,
                aPositiveChecked: false,
                aNegativeChecked: false,
                bPositiveChecked: false,
                bNegativeChecked: false,
                abPositiveChecked: false,
                abNegativeChecked: false,
                oPositiveChecked: false,
                oNegativeChecked: false
            }, console.log(this.state.nearByDonors))
        )
    }


    findDonors = () => {
        console.log(this.state.location)
        BloodBanksNearby.findDonorsNearMe(this.state.location)
            .then((nearbyDonors) =>
                this.setState({
                    nearByDonors: nearbyDonors
                }, console.log("In filter:"+this.state.nearByDonors)))
    }

    render() {

        return (
            <ScrollView>

                <Row>
                    <Col size={90}>
                        <Hideo
                            onChangeText={(text) => { this.setState({location: text})}}
                            onSubmitEditing={() => this.findDonors()}
                            iconClass={Icon}
                            iconName={'location-arrow'}
                            iconColor={'white'}
                            value ={this.state.location}
                            clearTextOnFocus={true}
                            iconBackgroundColor={'#d32f2f'}
                            inputStyle={{ color: '#d32f2f',borderBottomColor: '#d32f2f',borderBottomWidth: 3 }}
                        />
                    </Col>
                    <Col size={10}>
                        <Icon name="filter"
                              size={25}
                              style={{padding: 10}}
                              onPress={()=> this.toggleModalVisibility()}/>
                    </Col>
                </Row>
                    {this.state.nearByDonors!==[] && this.state.nearByDonors.map((donor, index) =>(
                        <ListItem key={index} rowData={donor}/>
                ))}

                <Modal isVisible={this.state.isModalVisible}>
                    <View>
                        {/*                        <Row>
                            <Col size={20}>
                                <Text>A+</Text>
                            </Col>
                            <Col size={80}>
                                <Switch value={this.state.aPositiveChecked}
                                        onValueChange={()=>this.setState({aPositiveChecked: !this.state.aPositiveChecked})}/>
                            </Col>
                        </Row>*/}
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
                                onPress={()=>this.getDonorsByBloodType()}></Button>
                    </View>

                </Modal>
            </ScrollView>


        )
    }
}
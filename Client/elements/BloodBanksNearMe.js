import React, {Component} from 'react'
import BloodBanksNearby from "../services/BloodBanksNearby";
import Place from "../elements/Place";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {View, Alert, Text, ListView, StyleSheet, TouchableHighlight, TextInput} from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid";
import Hideo from "react-native-textinput-effects/lib/Hideo";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
export default class BloodBanksNearMe extends Component {
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state ={

            dataSource:ds,
            location:'Enter Location'
        }

    }
    componentDidMount() {
        //this.findBloodCentre()
    }

    findBloodCentre = () => {
        BloodBanksNearby.findAllBloodBanks(this.state.location)
            .then((banks) =>
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(banks)
                }))
    }

    addFav = (bank) =>{
        let bankObj = {name:bank.name,
            address:bank.formatted_address,
            contact:bank.formatted_phone_number,
            donor:this.props.navigation.getParam('userId', 'defValue')
        }
        console.log(JSON.stringify(bankObj))
        fetch("https://blooming-castle-18974.herokuapp.com/savior/favourite",{
            credentials: 'include', method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bankObj)
        }).then(response => console.log(response))
    }
    renderRow = (rowData) => {
        return(
                    <Row   style={styles.rowView}>
                        <Col size={10}>
                            <Icon name="tint" size={30} color="#d32f2f" />
                        </Col>
                        <Col size={80}  >
                            <Text>{rowData.name}</Text>
                        </Col>
                        <Col size={10}>
                            {this.props.navigation.getParam('userId', 'defValue') ?
                                <Icon name="heart" size={20} color="#FFC107"
                                onPress={() => this.addFav(rowData)}/>
                                :null}
                        </Col>
                    </Row>

        )
    }

    render() {


        return (
            <View>
                    <Hideo
                        onChangeText={(text) => { this.setState({location: text})}}
                        onSubmitEditing={() => this.findBloodCentre()}
                        iconClass={Icon}
                        iconName={'location-arrow'}
                        iconColor={'white'}
                        value ={this.state.location}
                        clearTextOnFocus={true}
                        iconBackgroundColor={'#d32f2f'}
                        inputStyle={{ color: '#d32f2f',borderBottomColor: '#d32f2f',borderBottomWidth: 3 }}
                    />
                    <ListView
                        style={{marginTop: 60}}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />

            </View>


        )
    }
}
const styles = StyleSheet.create({
    rowView:{
        backgroundColor:'#fff',
        borderBottomColor:'#d32f2f',
        borderBottomWidth:2,
        padding: 10,

    }
});
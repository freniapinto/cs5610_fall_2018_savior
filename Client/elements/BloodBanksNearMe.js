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


    renderRow = (rowData) => {
        return(


                    <Row   style={styles.rowView}>
                        <Col size={10}>
                            <Icon name="tint" size={30} color="#d32f2f" />
                        </Col>
                        <Col size={90}  onPress={this.navigateToDetailPage.bind(this,rowData.place_id)}>
                            <Text>{rowData.name}</Text>
                        </Col>
                    </Row>


        )
    }
    navigateToDetailPage = (placeId) =>{
        this.props.navigation.navigate('SelectedBloodBank', {placeId: placeId, city: this.state.location})

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
import {Component} from "react";
import BloodBanksNearby from "../services/BloodBanksNearby";
import {Col, Row} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import {ListView, StyleSheet, Text, View} from "react-native";
import Hideo from "react-native-textinput-effects/lib/Hideo";
import React from "react";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class Favorites extends Component{
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state ={

            dataSource:ds,

        }
        this.findFavs()
    }
    componentDidMount() {
        //this.findBloodCentre()
    }

    findFavs= () => {
        fetch("https://blooming-castle-18974.herokuapp.com/savior/favourite/all",{
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((banks) => this.setState({
                dataSource:this.state.dataSource.cloneWithRows(banks)
            }))
    }


    renderRow = (rowData) => {
        return(
            <View style={styles.rowView}>
                <Row   >
                    <Col size={10}>
                        <Icon name="tint" size={30} color="#d32f2f" />
                    </Col>
                    <Col size={80}>
                        <Text>{rowData.name}</Text>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}} >
                    <Col style={{width:"10%"}}>

                    </Col>
                    <Col style={{width:"40%"}}>
                        <Text style={{fontSize:15}}> <Icon name = "phone" size={15} color={"green"}/>&nbsp; {rowData.contact} </Text>
                    </Col>
                    <Col style={{width:"50%"}}>
                        <Text style={{fontSize:15}}> {rowData.address} </Text>
                    </Col>
                </Row>
            </View>


        )
    }

    render() {


        return (
            <View>
                <Text style={{fontSize:30,textAlign:'center'}}>My Favorite Donation Center</Text>
                <ListView
                    style={{marginTop: 20}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
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
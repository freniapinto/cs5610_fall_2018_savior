import {Component} from "react";
import {Col, Row} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import {ListView, StyleSheet, Text, View} from "react-native";
import React from "react";

import BloodBanksNearby from "../services/BloodBanksNearby";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
export default class Community extends Component{
    static navigationOptions = {
        title: 'Community ',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#d32f2f', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' ,fontSize: 30},
    };
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this);
        this.state ={

            dataSource:ds,
        }
        this.findPosts();

    }
    findPosts = () => {
        fetch("https://blooming-castle-18974.herokuapp.com/savior/post",{
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((posts) => this.setState({
                dataSource:this.state.dataSource.cloneWithRows(posts)
            }))
    }

    renderRow = (rowData) => {
        return(
            <View style={styles.rowView}>
                <Row  >
                    <Col style={{width:"10%"}}>
                        <Icon name="user" size={20} color="#0693E3"/>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Text style={{fontSize:25}}> {rowData.title} </Text>
                    </Col>
                    <Col style={{width:"20%"}}>
                        <Text><Icon name="tint" size={20} color="#d32f2f"/>&nbsp; {rowData.bloodGroup}</Text>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}} >
                    <Col style={{width:"10%"}}>

                    </Col>
                    <Col style={{width:"80%"}}>
                        <Text style={{fontSize:15}}> {rowData.description} </Text>
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

    render(){

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
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
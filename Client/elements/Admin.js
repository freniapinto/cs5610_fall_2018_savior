import {Component} from "react";
import React from "react";
import {ListView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Row from "react-native-easy-grid/Components/Row";
import Col from "react-native-easy-grid/Components/Col";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import ModifyPostAdmin from "./ModifyPostAdmin";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
export default class Admin extends Component{

    constructor(props){
        super(props)
        this.state={
            donors:ds,
            banks:ds,
            posts:ds,
            showDonors:false,
            showBanks:false,
            showPosts:false

        }
        this.renderDonorsList()
        this.renderBBMList()
        //this.renderRow = this.renderDonorRow().bind(this);
    }

    renderBBMList = () => {
        fetch("https://blooming-castle-18974.herokuapp.com/savior/admin/bloodbank",{
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((banks) => { console.log(banks)
                this.setState({
                    banks:this.state.donors.cloneWithRows(banks)
                })})
    }

    deleteBBM =(userId ) =>{
        console.log(userId)
        fetch("https://blooming-castle-18974.herokuapp.com/savior/admin/donor/"+userId,{
            method: 'DELETE',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(this.renderBBMList())
    }
    renderDonorsList = () => {
        fetch("https://blooming-castle-18974.herokuapp.com/savior/admin/donor",{
            method: 'GET',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((donors) => this.setState({
                donors:this.state.donors.cloneWithRows(donors)
            }))
    }

    deleteDonor =(userId ) =>{
        console.log(userId)
        fetch("https://blooming-castle-18974.herokuapp.com/savior/admin/donor/"+userId,{
            method: 'DELETE',
            credentials: "include",
            body: null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(setTimeout(() => {this.renderDonorsList()}, 1000))
    }

    renderDonors=() =>{

        return(
            <ListView
                //style={{ marginTop:20}}
                dataSource={this.state.donors}
                renderRow={this.renderDonorRow.bind(this)}/>
        )
    }
    renderDonorRow = (rowData) => {
        console.log(rowData)
        return(
            <Row   style={styles.rowView}>
                <Col size={10}>
                    <Icon name="user" size={30} color="#0693e3" />
                </Col>
                <Col size={80}  >
                    <Text>{rowData.username}({rowData._id})</Text>
                </Col>
                <Col size={10}>
                    <Icon name="trash" size={20} color="#EF5A57" onPress={() => this.deleteDonor(rowData._id)}/>
                </Col>
            </Row>)
    }
    renderBBMS=() =>{

        return(
            <ListView
                //style={{ marginTop:20}}
                dataSource={this.state.banks}
                renderRow={this.renderBBMRow.bind(this)}/>
        )
    }
    renderBBMRow = (rowData) => {
        console.log(rowData)
        return(
            <Row   style={styles.rowView}>
                <Col size={10}>
                    <Icon name="user" size={30} color="#0693e3" />
                </Col>
                <Col size={80}  >
                    <Text>{rowData.username}({rowData._id})</Text>
                </Col>
                <Col size={10}>
                    <Icon name="trash" size={20} color="#EF5A57" onPress={() => this.deleteBBM(rowData._id)}/>
                </Col>
            </Row>)
    }
    render(){
        return(
            <View>
                <View style={{

                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop:"10%",
                    justifyContent: 'space-between'}}>

                    <View style={{flex: 1}}>
                        <TouchableHighlight
                            underlayColor={'#EF5A57'}
                            activeOpacity={0.5}
                            onPress={() => this.setState({showDonors:true,addUser:false,showBanks:false,showPosts:false})}
                            style = {{  backgroundColor: '#EF5A57',padding:10,marginRight: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}> Donor </Text>
                        </TouchableHighlight>
                    </View>

                    <View  style={{flex: 1}}>
                        <TouchableHighlight
                            onPress={() => this.setState({showDonors:false,addUser:false,showBanks:true,showPosts:false})}
                            underlayColor={ '#EF9353'}
                            activeOpacity={0.5}
                            style = {{  backgroundColor: '#EF9353',padding: 10,marginRight: 10}}>
                            <Text style={{color: 'white', fontSize: 15}}>  Bank Members </Text>
                        </TouchableHighlight>
                    </View>
                    <View  style={{flex: 1}}>
                        <TouchableHighlight
                            onPress={() => this.setState({showDonors:false,addUser:false,showBanks:false,showPosts:true})}
                            underlayColor={'#0693e3'}
                            activeOpacity={0.5}
                            style = {{  backgroundColor: '#0693e3' ,padding: 10,marginRight: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}> Posts </Text>
                        </TouchableHighlight>
                    </View>
                    {/*<View  style={{flex: 1}}>*/}
                        {/*<TouchableHighlight*/}
                            {/*underlayColor={'#0693e3'}*/}
                            {/*onPress={() =>{ this.setState({addUser:true,showDonors:false,showBanks:false,showPosts:false}); this.props.showRegister()}}*/}
                            {/*activeOpacity={0.5}*/}
                            {/*style = {{  backgroundColor: '#0693e3' ,padding: 10,marginRight: 10}}>*/}
                            {/*<Text style={{color: 'white', fontSize: 20}}> Add User </Text>*/}
                        {/*</TouchableHighlight></View>*/}
                </View>

                {this.state.showDonors === true && this.renderDonors()}
                {this.state.showBanks === true && this.renderBBMS()}
                {this.state.showPosts === true && <ModifyPostAdmin/>}

            </View>

        )
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',

        padding: 10,
        marginTop:10,
        marginLeft: 5},
    homeScreen:{
        flex: 1,
        marginTop: 30

    },
    rowView:{
        //backgroundColor:'#fff',
        borderBottomColor:'#d32f2f',
        borderBottomWidth:2,
        padding: 10,

    }
});
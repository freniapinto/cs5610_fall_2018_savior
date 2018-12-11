import React, {Component} from 'react'
import {View, Alert, ListView, Button, TextInput, ScrollView, StyleSheet} from "react-native"
//import { Input } from "react-native-elements"
import { Col, Row, Grid } from "react-native-easy-grid";
import Hideo from "react-native-textinput-effects/lib/Hideo";
import ListItem from "../elements/ListItem"
import Modal from "react-native-modal"
import PostItem from "../elements/PostItem"
import BloodBanksNearby from "../services/BloodBanksNearby";
import Icon from "react-native-vector-icons/FontAwesome";
import Hoshi from "react-native-textinput-effects/lib/Hoshi";
import {Text} from "react-native-elements";

export default class ModifyPostAdmin extends Component {
    static navigationOptions = {
        title: 'Donors Near Me',
    }
    constructor(props){
        super(props);
        //this.renderRow = this.renderRow.bind(this);
        this.state ={
            isModalVisible: false,
            allPosts: [],
            editedTitle: '',
            editedDescription: ''
        }

    }
    componentDidMount() {
        this.findAllPosts();
    }

    findAllPosts() {
        BloodBanksNearby.findAllPosts()
            .then((allPosts) =>
                this.setState({
                    allPosts: allPosts
                }, console.log("In admin:"+this.state.allPosts)))
    }


    editPost = (id) => {
        const updatedPost = {
            title: this.state.editedTitle,
            description: this.state.editedDescription
        }
        BloodBanksNearby.editPost(id, updatedPost).then((status)=> {
            this.setState({
                isModalVisible: false
            })
            this.findAllPosts()})
    }

    deletePost = (id) => {
        BloodBanksNearby.deletePost(id).then((allPosts)=>
            this.setState({
                allPosts: allPosts
            }))
    }

    toggleModalVisibility = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    render() {

        return (
            <ScrollView>
                {this.state.allPosts!==[] && this.state.allPosts.map((post, index) =>(
                    <Row key={index}>
                        <Row>
                            <Col size={90}>
                                <PostItem  rowData={post}/>
                            </Col>
                            <Col size={5} style={styles.rowViewExpanded}>
                                <Icon name="trash"
                                      size={20}
                                      onPress={()=>this.deletePost(post._id)}/>
                            </Col>
                            <Col size={5} style={styles.rowViewExpanded}>
                                <Icon name="pencil"
                                      size={20}
                                      onPress={()=>this.toggleModalVisibility()}/>
                            </Col>
                        </Row>
                        <Modal isVisible={this.state.isModalVisible}>
                            <Text style={{fontSize:20, textAlign: 'center'}}>Edit Post </Text>
                            <Hoshi
                                label={'Title'}
                                onChangeText={(title) => { this.setState({editedTitle: title})}}
                                value={this.state.editedTitle}
                                borderColor={'#d32f2f'}
                                backgroundColor={'#F9F7F6'}
                                style={{marginTop: 15}}/>

                            <Hoshi
                                label={'Decription'}
                                onChangeText={(description) => { this.setState({editedDescription: description})}}
                                value={this.state.editedDescription}
                                borderColor={'#d32f2f'}
                                backgroundColor={'#F9F7F6'}/>
                            <Button title="Submit"
                                    onPress={()=>this.editPost(post._id)}/>
                        </Modal>
                    </Row>

                ))}
            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({
    rowViewExpanded: {
        backgroundColor:'#fff',
        borderBottomColor:'#d32f2f',
        borderBottomWidth:1,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    }
});
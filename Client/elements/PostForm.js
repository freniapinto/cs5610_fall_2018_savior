import {Component} from "react";
import React from "react";
import {StyleSheet, ScrollView, View, TouchableHighlight} from 'react-native';
import Hoshi from "react-native-textinput-effects/lib/Hoshi";
import {Col, Row} from "react-native-easy-grid";
import {Text} from "react-native-elements";
export default class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            description:'',
            bloodGroup: '',
            city:'',
            address:'',
            contact:'',
            email:''
        }
    }

    render(){
        return(
            <ScrollView >
                <View style={{margin: 10,flex: 1, paddingBottom: '20%'}}>
                    <Text style={{fontSize:30}}>Post Your Need in Community</Text>
                    <Hoshi
                        label={'Title'}
                        onChangeText={(text) => { this.setState({title: text})}}
                        borderColor={'#d32f2f'}
                        backgroundColor={'#F9F7F6'}
                        value = {this.state.title}
                        style={{marginTop:15}}/>
                    <Hoshi
                        height={100}
                        label={'Description'}
                        multiline = {true}
                        numberOfLines = {4}
                        onChangeText={(text) => { this.setState({description: text})}}
                        borderColor={'#d32f2f'}
                        backgroundColor={'#F9F7F6'}
                        value = {this.state.description}
                        style={{marginTop:15}}/>
                    <Row style={{marginTop: 15}}>
                        <Col style={{paddingRight: 20}}>
                            <Hoshi
                                onChangeText={(text) => this.setState({bloodGroup:text})}
                                value={this.state.bloodGroup}
                                label={'Blood Group'}
                                borderColor={'#d32f2f'}
                                backgroundColor={'#F9F7F6'}
                                />
                        </Col>
                        <Col>
                            <Hoshi
                                onChangeText={(text) => this.setState({city:text})}
                                value={this.state.city}
                                label={'City'}
                                borderColor={'#d32f2f'}
                                backgroundColor={'#F9F7F6'}
                                />
                        </Col>
                    </Row>
                    <Hoshi
                    label={'Address'}
                    onChangeText={(text) => { this.setState({address: text})}}
                    borderColor={'#d32f2f'}
                    backgroundColor={'#F9F7F6'}
                    value = {this.state.address}
                    style={{marginTop:15}}/>
                    <Hoshi
                        label={'Contact'}
                        maxLength = {40}
                        onChangeText={(text) => { this.setState({contact: text})}}
                        borderColor={'#d32f2f'}
                        backgroundColor={'#F9F7F6'}
                        value = {this.state.contact}
                        style={{marginTop:15}}/>
                    <Hoshi
                        label={'Email'}
                        maxLength = {40}
                        onChangeText={(text) => { this.setState({email: text})}}
                        borderColor={'#d32f2f'}
                        backgroundColor={'#F9F7F6'}
                        value = {this.state.email}
                        style={{marginTop:15}}/>
                    <TouchableHighlight
                        onPress={() => this.props.postComment(this.createPost())}
                        underlayColor={'#d32f2f'}
                        activeOpacity={0.5}
                        style={styles.button}>
                        <Text style={{color:'white',fontSize:20}}> Post </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }

    createPost = () => {
        var d = new Date();
        if(this.props.user.type === "DONOR"){
            console.log(this.props.user._id)
            return({
                title : this.state.title,
                description : this.state.description,
                group : this.state.bloodGroup,
                address : this.state.address,
                city : this.state.city,
                date : d.getDate(),
                contact : this.state.contact,
                emailId : this.state.email,
                donor: this.props.user._id
            })
        }
        else{
            return({
                title : this.state.title,
                description : this.state.description,
                group : this.state.bloodGroup,
                address : this.state.address,
                city : this.state.city,
                date : d.getDate(),
                contact : this.state.contact,
                emailId : this.state.email,
                bloodBank: this.props.user._id
            })
        }
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        padding: 10,
        marginTop:20,
        marginLeft: 5},
});
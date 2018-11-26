import React, {Component} from 'react'
import {View, Text, StyleSheet, ListView} from "react-native"
import BloodBanksNearby from "../services/BloodBanksNearby";
import Col from "react-native-easy-grid/Components/Col";
import Grid from "react-native-easy-grid/Components/Grid";
import Row from "react-native-easy-grid/Components/Row";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SelectedBloodBank extends Component {
    static navigationOptions = {
        title: 'Blood Bank Information'
    }

    constructor(props){
        super(props)
        this.state={
            details: []
        }

    }

    componentDidMount() {

        BloodBanksNearby.findDetailsOfSelectedBloodBank(this.props.navigation.getParam('city', 'defValue'),
            this.props.navigation.getParam('placeId', 'defValue')).then((detail)=>{
            this.setState({
                details: detail
            });
        });
    }

    render() {


        if(!this.state.details.opening_hours){
            return(
                <View>
                    <Text>Loading Details</Text>
                </View>
            )
        }

        return (

                <Grid>
                    <Row style={{height:'20%'}}>
                        <Text style ={{fontSize:30,padding:30, color:'red'}}>{this.state.details.name}</Text>
                    </Row>
                    <Row style={{height:'10%'}}>
                        <Col size={1} >
                            <Col size={1}>
                                <Icon name="star" size={30} color="yellow" style={{padding:30}}/></Col>
                            <Col size={3}>
                                <Text style ={{color:'black',paddingLeft:60,paddingTop:10,paddingRight:60, fontSize:30}}> {this.state.details.rating} </Text>
                            </Col>

                        </Col>
                        <Col size={3}>
                            <Col size={1}>
                                <Icon name="phone" size={30} color="green" style={{padding:30}}/></Col>
                            <Col size={3}>
                                <Text style ={{color:'black',paddingLeft:60,paddingTop:10, fontSize:20}}>
                                    {this.state.details.formatted_phone_number} </Text>
                            </Col>

                        </Col>
                    </Row >

                    <Row style={{height:'20%',padding:30}}>
                        <Col style={{width:'10%'}}>
                            <Icon name="location-arrow" size={30} color="red" /></Col>
                        <Col  style={{width:'90%'}} >
                            <Text style={{fontSize:20}}> {this.state.details.formatted_address} </Text>
                        </Col>
                    </Row>

                    <Row style={{paddingLeft:30}}>
                        <Text style={{fontSize:20, color:'blue'}}>Operating Hours</Text>
                    </Row>
                    {this.state.details.opening_hours.weekday_text.map((text , index ) =>(
                        <Row style={{paddingLeft:30}} key={index}>
                            <Text  style={{fontSize:20}} >{text}</Text>
                        </Row>))
                    }



                </Grid>


        )
    }
}
const styles = StyleSheet.create({



});
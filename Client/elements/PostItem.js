import React, {Component} from "react";
import {Col, Row} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, View} from "react-native";
import Collapsible from "react-native-collapsible";
import {Text} from "react-native-elements"
import BloodBanksNearby from "../services/BloodBanksNearby";


export default class PostItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }

    setValue = () => {
        this.setState({
            open: !this.state.open
        }, console.log(this.state.open))
    }


    render() {
        console.log(this.state.open)
        return (
            <Row   style={styles.rowViewExpanded}
                   onPress={this.setValue}>
                <Col size={15}>
                    <Icon name={(this.state.open)? "chevron-right": "chevron-down"} size={30} color="#d32f2f" />
                </Col>
                <Col size={85} >
                    <Text h5>Title: {this.props.rowData.title}</Text>
                    <Row>
                        <Col size={10}>
                            <Icon name="sticky-note" size={15}></Icon>
                        </Col>
                        <Col size={90}>
                            <Text>{this.props.rowData.description}</Text>
                        </Col>
                    </Row>

                    <Collapsible collapsed={this.state.open}>
                        <Row>
                            <Col size={10}>
                                <Icon name="envelope-o" size={15}></Icon>
                            </Col>
                            <Col size={90}>
                                <Text>{this.props.rowData.emailId}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={10}>
                                <Icon name="phone" size={15}></Icon>
                            </Col>
                            <Col size={90}>
                                <Text>{this.props.rowData.contact}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={10}>
                                <Icon name="location-arrow" size={15}></Icon>
                            </Col>
                            <Col size={90}>
                                <Text>{this.props.rowData.address}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={30}>
                                <Text>Date posted:</Text>
                            </Col>
                            <Col size={70}>
                                <Text>{this.props.rowData.date}</Text>
                            </Col>
                        </Row>

                    </Collapsible>
                </Col>
            </Row>
        )
    }
}
const styles = StyleSheet.create({
    rowViewExpanded: {
        backgroundColor:'#fff',
        borderBottomColor:'#d32f2f',
        borderBottomWidth:1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
});
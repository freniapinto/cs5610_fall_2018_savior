import React, {Component} from "react";
import {Col, Row} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, Text, View} from "react-native";
import Collapsible from "react-native-collapsible";


export default class ListItem extends Component {

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
        return (
            <Row   style={ styles.rowViewExpanded}
                   onPress={this.setValue}>
                <Col size={20}>
                    <Icon name={(this.state.open)? "chevron-right": "chevron-down"} size={30} color="#d32f2f" />
                </Col>
                <Col size={80} >
                    <Text >
                        {this.props.rowData.firstName} {this.props.rowData.lastName}</Text>
                    <Row>
                        <Col size={10}>
                            <Icon name="tint" size={15} color="#d32f2f" />
                        </Col>
                        <Col size={90}>
                            <Text>{this.props.rowData.donor.blood_group}</Text>
                        </Col>
                    </Row>

                    <Collapsible collapsed={this.state.open}>
                        <Row>
                            <Col size={10}>
                                <Icon name="phone" size={20}></Icon>
                            </Col>
                            <Col size={90}>
                                <Text>{this.props.rowData.contact}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={10}>
                                <Icon name="location-arrow" size={20}></Icon>
                            </Col>
                            <Col size={90}>
                                <Text>{this.props.rowData.address}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={70}>
                                <Text>Undergoing treatment: </Text>
                            </Col>
                            <Col size={30}>
                                <Text>{this.props.rowData.donor.undergoing_treatment}</Text>
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
import React, {Component} from "react";
import {Col, Row} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, Text, View} from "react-native";
import Collapsible from "react-native-collapsible";


export default class BloodStockItem extends Component {

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
                    <Text >{this.props.rowData.bloodBank.blood_bank_name}</Text>
                    <Row>
                        <Col size={20}>
                            <Icon name="user" size={20}></Icon>
                        </Col>
                        <Col size={80}>
                            <Text> {this.props.rowData.username}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={20}>
                            <Icon name="location-arrow" size={20}></Icon>
                        </Col>
                        <Col size={80}>
                            <Text>{this.props.rowData.address}</Text>
                        </Col>
                    </Row>
                    <Collapsible collapsed={this.state.open}>
                        <Row>
                            <Col size={20}>
                                <Icon name="phone" size={20}></Icon>
                            </Col>
                            <Col size={80}>
                                <Text>{this.props.rowData.contact}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>A+ stock: {this.props.rowData.bloodBank.a_plus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>A- stock: {this.props.rowData.bloodBank.a_minus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>B+ stock: {this.props.rowData.bloodBank.b_plus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>B- stock: {this.props.rowData.bloodBank.b_minus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>AB+ stock: {this.props.rowData.bloodBank.ab_plus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>AB- stock: {this.props.rowData.bloodBank.ab_minus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>O+ stock: {this.props.rowData.bloodBank.o_plus} litres</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={50}>
                                <Row>
                                    <Col size={8}>
                                        <Icon name="tint" size={15} color="#d32f2f" />
                                    </Col>
                                    <Col size={92}>
                                        <Text>O- stock: {this.props.rowData.bloodBank.o_minus} litres</Text>
                                    </Col>
                                </Row>
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
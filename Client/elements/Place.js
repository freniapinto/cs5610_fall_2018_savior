import React, {Component} from 'react'
import {View, Text} from "react-native"

export default class Place extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (<Text>{this.props.centers.formatted_address}</Text>)
    }
}
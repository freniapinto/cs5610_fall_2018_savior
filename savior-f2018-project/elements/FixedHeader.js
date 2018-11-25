import React from 'react';
import {Header} from "react-native-elements";

const FixedHeader = () =>(
<Header backgroundColor='#d32f2f'
    leftComponent={{ icon:'menu',color:'#fff'}}
    centerComponent={{ text:'Saviour',style:{color:'#fff', fontSize: 30}}} />
)
export  default FixedHeader

